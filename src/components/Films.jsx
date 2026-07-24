import { FILMS } from '../data.js';

export default function Films({ onPlay }) {
  const hero = FILMS[0];
  const year = new Date().getFullYear();
  return (
    <div className="view">
      <div className="film-hero">
        <img src={hero.src} alt="showreel" />
        <div className="scrim" />
        <div className="play-big" onClick={onPlay}>
          <div className="play-tri" />
        </div>
        <div className="caption">
          <div className="eyebrow">Cinematic Films</div>
          <h1>Motion, with the weight of memory</h1>
          <p>Weddings, brand films and short cinema — shot and cut in-house. Press play for the {year} showreel.</p>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 80 }}>
        <div className="film-head">
          <h2>Selected films</h2>
          <span>{FILMS.length} productions</span>
        </div>
        <div className="film-grid">
          {FILMS.map((f) => (
            <div key={f.title} className="film-card" onClick={onPlay}>
              <div className="film-poster">
                <img src={f.src} alt={f.title} loading="lazy" />
                <div className="play-sm-wrap"><div className="play-sm"><i /></div></div>
                <div className="film-dur">{f.duration}</div>
              </div>
              <div className="film-meta">
                <div>
                  <div className="t">{f.title}</div>
                  <div className="ty">{f.type}</div>
                </div>
                <span className="y">{f.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
