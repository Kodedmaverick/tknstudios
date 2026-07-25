// Procedural royalty-free ambient music — two gentle tunes (no audio files).
// A singleton so navigation start/stop is seamless.

const TUNES = {
  gallery: { step: 0.52, wave: 'sine',     root: 220.00, chords: [[0,3,7,10],[5,8,12,15],[7,10,14,17],[3,7,10,14]], scale: [0,3,5,7,10] },
  art:     { step: 0.64, wave: 'triangle', root: 174.61, chords: [[0,4,7,11],[5,9,12,16],[2,5,9,12],[7,11,14,19]], scale: [0,2,4,7,9] },
};
const VOL = 0.16;

let ctx = null, master = null, timer = null, playing = null, step = 0, next = 0, muted = false;
const listeners = new Set();

function ensure() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  return ctx;
}

function tone(freq, start, dur, type, peak, attack) {
  const o = ctx.createOscillator(); o.type = type || 'sine'; o.frequency.value = freq;
  const g = ctx.createGain(); const a = attack || 0.03;
  g.gain.setValueAtTime(0.0001, start);
  g.gain.exponentialRampToValueAtTime(peak, start + a);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  o.connect(g); g.connect(master);
  o.start(start); o.stop(start + dur + 0.05);
}

export function startMusic(which) {
  if (!ensure()) return;
  if (ctx.state === 'suspended') ctx.resume();
  const target = muted ? 0 : VOL;
  if (playing === which && timer) { master.gain.setTargetAtTime(target, ctx.currentTime, 0.5); return; }
  if (timer) { clearTimeout(timer); timer = null; }
  playing = which;
  const tune = TUNES[which]; step = 0; next = ctx.currentTime + 0.12;
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setTargetAtTime(target, ctx.currentTime, 0.7);
  const schedule = () => {
    if (playing !== which) return;
    while (next < ctx.currentTime + 1.2) {
      const s = step, t = next;
      const chord = tune.chords[Math.floor(s / 8) % tune.chords.length];
      if (s % 8 === 0) chord.forEach((semi) => tone(tune.root * Math.pow(2, semi / 12), t, tune.step * 8, 'sine', 0.028, 1.4));
      if (Math.random() < 0.62) {
        const oct = Math.random() < 0.33 ? 12 : 0;
        const semi = tune.scale[Math.floor(Math.random() * tune.scale.length)] + oct;
        const off = Math.random() < 0.3 ? tune.step / 2 : 0;
        tone(tune.root * Math.pow(2, semi / 12) * 2, t + off, tune.step * 1.7, tune.wave, 0.05, 0.04);
      }
      step++; next += tune.step;
    }
    timer = setTimeout(schedule, 250);
  };
  schedule();
}

export function stopMusic() {
  if (timer) { clearTimeout(timer); timer = null; }
  playing = null;
  if (master && ctx) master.gain.setTargetAtTime(0, ctx.currentTime, 0.45);
}

export function toggleMute(view) {
  muted = !muted;
  listeners.forEach((fn) => fn(muted));
  if (master && ctx) master.gain.setTargetAtTime(muted ? 0 : VOL, ctx.currentTime, 0.35);
  if (!muted) { if (view === 'galleries') startMusic('gallery'); else if (view === 'visualart') startMusic('art'); }
  return muted;
}

export function isMuted() { return muted; }
export function onMuteChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
