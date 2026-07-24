import { useState, useCallback } from 'react';
import { NAV, PHOTOS } from './data.js';
import Nav from './components/Nav.jsx';
import Wall from './components/Wall.jsx';
import Galleries from './components/Galleries.jsx';
import Films from './components/Films.jsx';
import Studio from './components/Studio.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { DetailPanel, Lightbox, ReelModal } from './components/Overlays.jsx';

export default function App() {
  const [view, setView] = useState('wall');
  const [wallFilter, setWallFilter] = useState('All');
  const [galFilter, setGalFilter] = useState('All');
  const [detail, setDetail] = useState(null);   // photo object
  const [lightbox, setLightbox] = useState(-1);  // index into PHOTOS
  const [reelOpen, setReelOpen] = useState(false);

  const go = useCallback((v) => (e) => { if (e && e.preventDefault) e.preventDefault(); setView(v); }, []);
  const openLightbox = useCallback((p) => setLightbox(PHOTOS.indexOf(p)), []);
  const stepLightbox = useCallback((d) => setLightbox((i) => (i + d + PHOTOS.length) % PHOTOS.length), []);

  return (
    <div className="app">
      <Nav nav={NAV} view={view} go={go} />

      {/* Wall stays mounted; hidden (not unmounted) when inactive so WebGL context is kept. */}
      <Wall
        active={view === 'wall'}
        filter={wallFilter}
        setFilter={setWallFilter}
        onOpenDetail={setDetail}
      />

      {view === 'galleries' && <Galleries galFilter={galFilter} setGalFilter={setGalFilter} onOpen={openLightbox} />}
      {view === 'films' && <Films onPlay={() => setReelOpen(true)} />}
      {view === 'studio' && <Studio />}
      {view === 'services' && <Services goContact={go('contact')} />}
      {view === 'contact' && <Contact />}

      {detail && (
        <DetailPanel photo={detail} onClose={() => setDetail(null)} onViewAll={go('galleries')} />
      )}
      {lightbox >= 0 && (
        <Lightbox photo={PHOTOS[lightbox]} onClose={() => setLightbox(-1)} onPrev={() => stepLightbox(-1)} onNext={() => stepLightbox(1)} />
      )}
      {reelOpen && <ReelModal onClose={() => setReelOpen(false)} />}
    </div>
  );
}
