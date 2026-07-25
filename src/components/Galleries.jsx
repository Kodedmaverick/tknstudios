import { CATS, PHOTOS } from '../data.js';

export default function Galleries({ galFilter, setGalFilter, onOpen }) {
  const shown = PHOTOS.filter((p) => galFilter === 'All' || p.cat === galFilter);
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
