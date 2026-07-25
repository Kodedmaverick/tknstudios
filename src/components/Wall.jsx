import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PHOTOS, VISUAL_ART, WALL_VIDEOS, CATS, playSwoosh } from '../data.js';

export default function Wall({ active, filter, setFilter, onOpenDetail, onOpenReel }) {
  const mountRef = useRef(null);
  const hoverRef = useRef(null);
  const apiRef = useRef(null);
  const activeRef = useRef(active);
  const enteredRef = useRef(false);
  const [entered, setEntered] = useState(false);

  const openDetailRef = useRef(onOpenDetail);
  openDetailRef.current = onOpenDetail;
  const openReelRef = useRef(onOpenReel);
  openReelRef.current = onOpenReel;

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;
    let W = host.clientWidth || window.innerWidth;
    let Hh = host.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, W / Hh, 0.1, 100);
    camera.position.set(0, 0, 20);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const isMobile = matchMedia('(max-width:768px)').matches || matchMedia('(pointer:coarse)').matches;
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, Hh);
    renderer.domElement.style.touchAction = 'none';
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const tiles = [];
    const wallVideos = [];
    const cols = 6, spX = 2.55, spY = 3.15;
    const rnd = (a, b) => a + Math.random() * (b - a);
    const loader = new THREE.TextureLoader();

    // Shuffle images so categories aren't grouped, then sprinkle in video tiles.
    const seen = new Set();
    const imgs = [...PHOTOS, ...VISUAL_ART].filter((p) => { if (seen.has(p.src)) return false; seen.add(p.src); return true; });
    for (let a = imgs.length - 1; a > 0; a--) { const b = Math.floor(Math.random() * (a + 1)); [imgs[a], imgs[b]] = [imgs[b], imgs[a]]; }
    const videoPicks = isMobile ? [] : WALL_VIDEOS.filter(Boolean).map((f) => ({ ...f, isVideo: true, cat: f.type, color: '#14100b' }));
    const items = imgs.slice();
    videoPicks.forEach((v, k) => { items.splice(Math.min(items.length, 3 + k * 7 + Math.floor(Math.random() * 3)), 0, v); });

    items.forEach((g, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const H = 1.98;
      const geo = new THREE.PlaneGeometry(1, H);
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(g.color || '#14100b'), transparent: true, opacity: 1 });
      if (g.isVideo) {
        if (g.poster) loader.load(g.poster, (t) => { if (!(mat.map && mat.map.isVideoTexture)) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; mat.map = t; mat.color.set(0xffffff); mat.needsUpdate = true; } if (t.image) mesh.userData.aspectX = H * (t.image.width / t.image.height); });
        const vid = document.createElement('video');
        vid.crossOrigin = 'anonymous'; vid.muted = true; vid.loop = true; vid.playsInline = true;
        vid.setAttribute('playsinline', ''); vid.preload = 'auto'; vid.src = g.src;
        vid.play().catch(() => {});
        const vt = new THREE.VideoTexture(vid); vt.colorSpace = THREE.SRGBColorSpace;
        vid.addEventListener('loadedmetadata', () => { if (vid.videoWidth) mesh.userData.aspectX = H * (vid.videoWidth / vid.videoHeight); });
        vid.addEventListener('playing', () => { mat.map = vt; mat.color.set(0xffffff); mat.needsUpdate = true; });
        mat.color.set(0xffffff);
        wallVideos.push(vid);
      } else {
        loader.load(g.src, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; mat.map = t; mat.color.set(0xffffff); mat.needsUpdate = true; if (t.image) mesh.userData.aspectX = H * (t.image.width / t.image.height); });
      }
      const mesh = new THREE.Mesh(geo, mat);
      const bx = (col - 2.5) * spX + rnd(-0.28, 0.28);
      const by = (1 - row) * spY + rnd(-0.35, 0.35);
      const bz = rnd(-1.6, 1.4);
      mesh.position.set(bx, by, bz);
      mesh.userData = { g, base: { x: bx, y: by, z: bz }, aspectX: 1.55, lift: 0, tLift: 0, scale: 1, tScale: 1, op: 1, tOp: 1, phase: rnd(0, 6.28), visible: true };
      group.add(mesh);
      tiles.push(mesh);
    });

    const ray = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-2, -2);
    let hovered = null, dragging = false, moved = false, lastX = 0, lastY = 0, downX = 0, downY = 0;
    const gt = { x: 0, y: 0 };
    let zoomTarget = 20, camZ = 20, autoT = 0;
    const dragK = isMobile ? 0.02 : 0.012, wheelK = isMobile ? 0.016 : 0.01, lerpK = isMobile ? 0.16 : 0.06;
    let raf = null, paused = false;
    const el = renderer.domElement;

    const sp = (e) => { const r = el.getBoundingClientRect(); pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1; pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1; };
    const onDown = (e) => { dragging = true; moved = false; lastX = e.clientX; lastY = e.clientY; downX = e.clientX; downY = e.clientY; host.style.cursor = 'grabbing'; };
    const onMove = (e) => {
      sp(e);
      if (dragging) {
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        if (Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY) > 5) moved = true;
        gt.x = Math.max(-7, Math.min(7, gt.x + dx * dragK));
        gt.y = Math.max(-6, Math.min(6, gt.y - dy * dragK));
        lastX = e.clientX; lastY = e.clientY;
      }
    };
    const onUp = () => {
      host.style.cursor = 'grab';
      if (dragging && !moved && enteredRef.current && hovered) {
        const g = hovered.userData.g;
        if (g.isVideo) openReelRef.current(g); else openDetailRef.current(g);
      }
      dragging = false;
    };
    // Scroll to navigate the wall; ctrl/cmd-scroll to zoom.
    const onWheel = (e) => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) { zoomTarget = Math.max(9, Math.min(19, zoomTarget + e.deltaY * 0.02)); return; }
      gt.x = Math.max(-7, Math.min(7, gt.x - e.deltaX * wheelK));
      gt.y = Math.max(-6, Math.min(6, gt.y - e.deltaY * wheelK));
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    const card = hoverRef.current;
    const showCard = (m) => {
      if (!card) return;
      const g = m.userData.g;
      card.innerHTML = `<div class="hc-cat">${g.cat || g.type} · ${g.year}</div><div class="hc-title">${g.title}</div><div class="hc-mood">${g.isVideo ? 'Cinematic film · tap to play' : g.mood}</div><div class="hc-loc">${g.location || 'TKN Studios'}</div>`;
      card.style.opacity = '1';
    };
    const hideCard = () => { if (card) card.style.opacity = '0'; };

    const tick = () => {
      if (paused) { raf = null; return; }
      raf = requestAnimationFrame(tick);
      const ent = enteredRef.current;
      autoT += 0.016;
      camZ += (zoomTarget - camZ) * 0.05; camera.position.z = camZ;
      if (!ent) { gt.x = Math.sin(autoT * 0.12) * 0.9; gt.y = Math.cos(autoT * 0.09) * 0.5; }
      group.position.x += (gt.x - group.position.x) * lerpK;
      group.position.y += (gt.y - group.position.y) * lerpK;
      if (ent && !dragging) {
        ray.setFromCamera(pointer, camera);
        const hits = ray.intersectObjects(tiles).filter((h) => h.object.userData.visible);
        const top = hits.length ? hits[0].object : null;
        if (top !== hovered) hovered = top;
      }
      const anyHover = !!hovered;
      tiles.forEach((m) => {
        const u = m.userData;
        const bob = Math.sin(autoT * 0.5 + u.phase) * 0.07;
        u.tLift = (m === hovered) ? 1.8 : 0;
        u.tScale = (m === hovered) ? 1.16 : 1;
        let bo = u.visible ? (ent ? 1 : 0.5) : 0.05;
        if (ent && anyHover && u.visible) bo = (m === hovered) ? 1 : 0.34;
        u.tOp = bo;
        u.lift += (u.tLift - u.lift) * 0.12;
        u.scale += (u.tScale - u.scale) * 0.12;
        u.op += (u.tOp - u.op) * 0.12;
        m.position.x = u.base.x;
        m.position.y = u.base.y + bob;
        m.position.z = u.base.z + u.lift;
        m.scale.set(u.scale * (u.aspectX || 1.55), u.scale, 1);
        m.material.opacity = u.op;
      });
      if (hovered && ent) {
        const p = new THREE.Vector3(); hovered.getWorldPosition(p); p.z += 0.1; p.project(camera);
        const r = el.getBoundingClientRect();
        const sx = (p.x * 0.5 + 0.5) * r.width, sy = (-p.y * 0.5 + 0.5) * r.height;
        const cw = 290, mg = 20; let tx = '-50%';
        if (sx < cw / 2 + mg) tx = '0'; else if (sx > r.width - cw / 2 - mg) tx = '-100%';
        card.style.left = sx + 'px'; card.style.top = (sy - 40) + 'px'; card.style.transform = `translate(${tx},14px)`;
        showCard(hovered);
        host.style.cursor = dragging ? 'grabbing' : 'pointer';
      } else { hideCard(); host.style.cursor = dragging ? 'grabbing' : 'grab'; }
      renderer.render(scene, camera);
    };

    apiRef.current = {
      enter: () => { zoomTarget = 12.5; },
      setFilter: (c) => tiles.forEach((m) => { const g = m.userData.g; m.userData.visible = c === 'All' || (g && g.cat === c); }),
      resize: () => {
        W = host.clientWidth || window.innerWidth; Hh = host.clientHeight || window.innerHeight;
        if (!W || !Hh) return;
        camera.aspect = W / Hh; camera.updateProjectionMatrix(); renderer.setSize(W, Hh);
      },
      pause: () => { paused = true; if (raf) cancelAnimationFrame(raf); raf = null; wallVideos.forEach((v) => v.pause()); },
      play: () => { paused = false; wallVideos.forEach((v) => v.play().catch(() => {})); if (!raf) raf = requestAnimationFrame(tick); },
    };

    paused = false;
    raf = requestAnimationFrame(tick);
    const onResize = () => { if (activeRef.current) apiRef.current.resize(); };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('wheel', onWheel);
      if (raf) cancelAnimationFrame(raf);
      wallVideos.forEach((v) => { v.pause(); v.src = ''; });
      tiles.forEach((m) => { m.geometry.dispose(); if (m.material.map) m.material.map.dispose(); m.material.dispose(); });
      renderer.dispose();
      if (el.parentNode) el.parentNode.removeChild(el);
      apiRef.current = null;
    };
  }, []);

  useEffect(() => {
    activeRef.current = active;
    const api = apiRef.current;
    if (!api) return;
    if (active) { api.play(); requestAnimationFrame(() => api.resize()); }
    else api.pause();
  }, [active]);

  useEffect(() => { apiRef.current && apiRef.current.setFilter(filter); }, [filter]);
  useEffect(() => { enteredRef.current = entered; if (entered && apiRef.current) apiRef.current.enter(); }, [entered]);

  const onEnter = () => { playSwoosh(); setEntered(true); };

  return (
    <div className="wall" style={{ display: active ? 'block' : 'none' }}>
      <div className="wall-mount" ref={mountRef} />
      <div className="wall-vignette" />
      <div className="wall-grain" />
      <div className="wall-hovercard" ref={hoverRef} />

      <div className="wall-filters" style={{ opacity: entered ? 1 : 0, pointerEvents: entered ? 'auto' : 'none' }}>
        {CATS.map((c) => (
          <button key={c} className={'chip' + (c === filter ? ' on' : '')} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      <div className="wall-hint" style={{ opacity: 0 }}>Drag or scroll to explore · ⌘/Ctrl-scroll to zoom · Click to open</div>

      {!entered && (
        <div className="hero">
          <div className="hero-eyebrow">Photography · Cinematic Films · Visual Art</div>
          <h1 className="hero-h1">Every frame<br /><em>becomes</em> timeless</h1>
          <div className="hero-rule" />
          <p className="hero-p">A visual studio by <b>Adesola Adedayo</b> — portraits, fashion, cinematic stories and visual art composed with light, colour and intention.</p>
          <button className="hero-cta" onClick={onEnter}>Enter the Gallery</button>
        </div>
      )}
    </div>
  );
}
