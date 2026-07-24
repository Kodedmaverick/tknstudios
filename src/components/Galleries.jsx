import { CATS } from '../data.js';

export default function Galleries({ galFilter, setGalFilter, onOpen }) {
  const shown = PHOTOSByFilter(galFilter);
  return (
    <div className="view">
      <div className="wrap">
        <div className="eyebrow">Photography</div>
        <h1 className="h1">The Collections</h1>
        <p className="lead">
          Portraits, fashion and beauty made in the studio — light shaped with patience,
          colour graded with intent. Filter by discipline, click any frame to view.
        </p>
        <div className="chips" style={{ marginBottom: 44 }}>
          {CATS.map((c) => (
            <button key={c} className={'chip' + (c === galFilter ? ' on' : '')} onClick={() => setGalFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="masonry">
          {shown.map((ph) => (
            <div key={ph.src} className="tile" onClick={() => onOpen(ph)}>
              <img src={ph.src} alt={ph.title} loading="lazy" />
              <div className="tile-cap">
                <div className="c">{ph.cat}</div>
                <div className="t">{ph.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { PHOTOS } from '../data.js';
function PHOTOSByFilter(f) {
  return PHOTOS.filter((p) => f === 'All' || p.cat === f);
}
