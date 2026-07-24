import { STEPS } from '../data.js';

export default function Studio() {
  return (
    <div className="view">
      <div className="wrap" style={{ paddingBottom: 40 }}>
        <div className="studio-hero">
          <div className="studio-portrait">
            <div className="frame" />
            <img src="/adesola.png" alt="Adesola Adedayo" />
            <div className="loc">Lagos, Nigeria</div>
          </div>
          <div>
            <div className="eyebrow">Creative Director</div>
            <h1 className="h1" style={{ marginBottom: 10 }}>Adesola Adedayo</h1>
            <div className="studio-role">Photographer · Videographer · Visual Artist</div>
            <p className="studio-bio">
              Adesola founded TKN Studios on a simple belief — that a photograph should feel like a held
              breath. Working across portraiture, fashion and cinematic film, he builds images around light
              and colour, letting the subject arrive rather than pose.
            </p>
            <p className="studio-bio dim">
              From intimate studio sittings to full production sets, the work is unhurried and intentional —
              art made through light, colour and time. <span className="note">[Edit this bio with Adesola’s own words.]</span>
            </p>
            <div className="studio-stats">
              <div><div className="n">10+</div><div className="l">Years</div></div>
              <div><div className="n">140+</div><div className="l">Published</div></div>
              <div><div className="n">∞</div><div className="l">Stories told</div></div>
            </div>
            <div className="studio-links">
              <a href="https://www.instagram.com/thekingnathystudios/" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://www.saatchiart.com/axpn_world" target="_blank" rel="noreferrer">Saatchi Art ↗</a>
            </div>
          </div>
        </div>
      </div>

      <div className="philosophy">
        <div className="inner">
          <div className="quote-mark">“</div>
          <p>Creating art through light, colour and the quiet moment just before a person forgets the camera is there.</p>
          <div className="attrib">— The TKN approach</div>
        </div>
      </div>

      <div className="process">
        <h2>How we work</h2>
        <div className="process-grid">
          {STEPS.map((s) => (
            <div key={s.num} className="step">
              <div className="n">{s.num}</div>
              <div className="t">{s.title}</div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
