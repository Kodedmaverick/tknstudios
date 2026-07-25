import { useState, useCallback } from 'react';
import { NAV, ALL_IMAGES } from './data.js';
import Nav from './components/Nav.jsx';
import Wall from './components/Wall.jsx';
import Galleries from './components/Galleries.jsx';
import VisualArt from './components/VisualArt.jsx';
import Films from './components/Films.jsx';
import Studio from './components/Studio.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { DetailPanel, Lightbox, ReelModal } from './components/Overlays.jsx';

export default function App() {
  const [view, setView] = useState('wall');
  const [wallFilter, setWallFilter] = useState('All');
  const [galFilter, setGalFilter] = useState('All');
  const [artFilter, setArtFilter] = useState('All');
  const [detail, setDetail] = useState(null);    // image object (photo or art)
  const [lightbox, setLightbox] = useState(-1);   // index into ALL_IMAGES
  const [reel, setReel] = useState(null);         // film object

  const go = useCallback((v) => (e) => { if (e && e.preventDefault) e.preventDefault(); setView(v); }, []);
  const openLightbox = useCallback((p) => setLightbox(ALL_IMAGES.findIndex((x) => x.src === p.src)), []);
  const stepLightbox = useCallback((d) => setLightbox((i) => (i + d + ALL_IMAGES.length) % ALL_IMAGES.length), []);

  return (
    <div className="app">
      <Nav nav={NAV} view={view} go={go} />

      {/* Wall stays mounted; hidden (not unmounted) when inactive so WebGL context is kept. */}
      <Wall
        active={view === 'wall'}
        filter={wallFilter}
        setFilter={setWallFilter}
        onOpenDetail={setDetail}
        onOpenReel={setReel}
      />

      {view === 'galleries' && <Galleries galFilter={galFilter} setGalFilter={setGalFilter} onOpen={openLightbox} />}
      {view === 'visualart' && <VisualArt artFilter={artFilter} setArtFilter={setArtFilter} onOpen={openLightbox} />}
      {view === 'films' && <Films onPlay={setReel} />}
      {view === 'studio' && <Studio />}
      {view === 'services' && <Services goContact={go('contact')} />}
      {view === 'contact' && <Contact />}

      {detail && (
        <DetailPanel photo={detail} onClose={() => setDetail(null)} onViewAll={go('galleries')} />
      )}
      {lightbox >= 0 && (
        <Lightbox photo={ALL_IMAGES[lightbox]} onClose={() => setLightbox(-1)} onPrev={() => stepLightbox(-1)} onNext={() => stepLightbox(1)} />
      )}
      {reel && <ReelModal film={reel} onClose={() => setReel(null)} />}
    </div>
  );
}
