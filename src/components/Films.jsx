import { FILMS } from '../data.js';

export default function Films({ onPlay }) {
  const hero = FILMS[0];
  const year = new Date().getFullYear();
  return (
    <div className="view">
      <div className="film-hero film-hero-wrap">
        <video
          className={hero.rotate ? 'film-hero-video rotated' : 'film-hero-video'}
          src={hero.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="scrim" />
        <div className="play-big" onClick={() => onPlay(hero)}>
          <div className="play-tri" />
        </div>
        <div className="caption film-hero-inner">
          <div className="eyebrow">Cinematic Films</div>
          <h1>Motion, with the weight of memory</h1>
          <p>Weddings, bridal cinema, brand and event films — shot and cut in-house. Tap any film below to watch.</p>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 80 }}>
        <div className="film-head">
          <h2>Selected films</h2>
          <span>{FILMS.length} productions</span>
        </div>
        <div className="film-grid">
          {FILMS.map((f) => (
            <div key={f.src} className="film-card" onClick={() => onPlay(f)}>
              <div className="film-poster">
                <video src={f.src} muted loop playsInline preload="metadata" className={f.rotate ? 'rotated' : ''} />
                <div className="play-sm-wrap"><div className="play-sm"><i /></div></div>
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
