import { ART_CATS } from '../data.js';
import { VISUAL_ART } from '../data.js';

export default function VisualArt({ artFilter, setArtFilter, onOpen }) {
  const shown = VISUAL_ART.filter((p) => artFilter === 'All' || p.client === artFilter);
  return (
    <div className="view">
      <div className="wrap">
        <div className="eyebrow">Visual Art</div>
        <h1 className="h1">Skin as canvas</h1>
        <p className="lead">
          Face and body painting, makeup art and conceptual portraiture — where the studio becomes a
          gallery and the subject becomes the artwork.
        </p>
        <div className="chips" style={{ marginBottom: 44 }}>
          {ART_CATS.map((c) => (
            <button key={c} className={'chip' + (c === artFilter ? ' on' : '')} onClick={() => setArtFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="masonry">
          {shown.map((ph) => (
            <div key={ph.src} className="tile" onClick={() => onOpen(ph)}>
              <img src={ph.src} alt={ph.title} loading="lazy" />
              <div className="tile-cap">
                <div className="c">{ph.client}</div>
                <div className="t">{ph.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
