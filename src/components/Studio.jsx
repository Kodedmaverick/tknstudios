import { SPECIALISMS, FEATURED, SCREEN_WORK, STAGE_WORK, LEDGER } from '../data.js';

export default function Studio() {
  return (
    <div className="view">
      {/* MASTHEAD */}
      <div className="wrap ed-wrap" style={{ paddingTop: 118, paddingBottom: 24 }}>
        <div className="ed-strip">
          <span>The Feature — Vol. 01</span>
          <span className="gold">Adesola Adedayo Nathaniel</span>
          <span className="right">Lagos · Est. TKN Studios</span>
        </div>
        <div className="ed-hero">
          <div>
            <div className="eyebrow">Creative Director</div>
            <h1 className="ed-title">The man behind<br /><span>the character</span></h1>
            <p className="ed-standfirst">A decade shaping the faces of Nigeria and South Africa's biggest screens and stages — from Netflix features to sold-out theatre and prime-time television.</p>
            <div className="ed-social">
              <a href="https://www.instagram.com/thekingnathystudios/" target="_blank" rel="noreferrer">@thekingnathystudios ↗</a>
            </div>
          </div>
          <div className="ed-portrait">
            <div className="frame" />
            <img src="/adesola.png" alt="Adesola Adedayo Nathaniel" />
            <div className="loc">Lagos, Nigeria</div>
          </div>
        </div>
      </div>

      {/* LEAD */}
      <div className="wrap" style={{ maxWidth: 940, paddingTop: 34, paddingBottom: 18 }}>
        <p className="ed-lead"><span className="drop">W</span>ith over a decade of creative experience, Adesola Adedayo Nathaniel has left his mark on the Nigerian and South African entertainment industries — working across numerous stage plays, musical productions, blockbuster films and reality television. A professional makeup artist with a visual-art background, he serves as lead photographer and makeup artist with Bolanle Austen-Peters Productions across Lagos and Pretoria.</p>
        <div className="ed-stats">
          <div><div className="n">10+</div><div className="l">Years</div></div>
          <div><div className="n">30+</div><div className="l">Productions</div></div>
          <div><div className="n">2</div><div className="l">Countries</div></div>
          <div><div className="n">Netflix</div><div className="l">Screens</div></div>
        </div>
      </div>

      {/* FEATURED */}
      <div className="wrap ed-wrap" style={{ paddingTop: 52, paddingBottom: 10 }}>
        <div className="ed-sechead"><span className="k">Featured</span><span className="rule" /><span className="s">Art Direction · Television</span></div>
        <div className="ed-feat">
          {FEATURED.map((f) => (
            <div key={f.title} className="feat-card">
              <div className="feat-img">
                <img src={f.src} alt={f.title} loading="lazy" />
                <div className="feat-tag">{f.tag}</div>
              </div>
              <div className="feat-body">
                <div className="k">{f.kicker}</div>
                <div className="t">{f.title}</div>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCREEN */}
      <div className="wrap ed-wrap" style={{ paddingTop: 52, paddingBottom: 10 }}>
        <div className="ed-sechead"><span className="k">Screen</span><span className="rule" /><span className="s">Film &amp; Streaming</span></div>
        <div className="ed-screen">
          {SCREEN_WORK.map((w) => (
            <div key={w.title} className="screen-card">
              <div className="screen-img poster">
                <img src={w.src} alt={w.title} loading="lazy" />
                <div className="screen-tag">{w.tag}</div>
              </div>
              <div className="screen-t">{w.title}</div>
              <div className="screen-m">{w.meta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STAGE */}
      <div className="wrap ed-wrap" style={{ paddingTop: 52, paddingBottom: 10 }}>
        <div className="ed-sechead"><span className="k">Stage</span><span className="rule" /><span className="s">Theatre &amp; Musicals</span></div>
        <div className="ed-stage">
          {STAGE_WORK.map((w) => (
            <div key={w.title} className="screen-card">
              <div className="screen-img poster">
                <img src={w.src} alt={w.title} loading="lazy" />
              </div>
              <div className="screen-t">{w.title}</div>
              <div className="screen-m">{w.meta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIAL + LEDGER */}
      <div className="wrap ed-testi" style={{ paddingTop: 56, paddingBottom: 20 }}>
        <div className="testi">
          <div className="mark">“</div>
          <p>Adedayo's talent knows no bounds. His attention to detail and ability to capture the essence of a character are unparalleled.</p>
          <div className="attrib">— Director, Bolanle Austen-Peters Productions</div>
        </div>
        <div>
          <div className="panel-h">Also credited on</div>
          <div className="ledger">
            {LEDGER.map((l) => <div key={l} className="ledger-row">{l}</div>)}
          </div>
        </div>
      </div>

      {/* EDUCATOR */}
      <div className="wrap ed-edu" style={{ paddingTop: 44, paddingBottom: 10 }}>
        <div className="edu-img"><img src="/photos/ed_educator.jpg" alt="Adesola teaching" loading="lazy" /></div>
        <div>
          <div className="eyebrow">Educator &amp; Mentor</div>
          <p className="edu-p">As a certified makeup tutor, Adesola has shared his expertise with aspiring artists at Lagos State government vocational institutions — empowering the next generation of talent with technique that meets international standards.</p>
          <div className="chips">
            {SPECIALISMS.map((s) => <span key={s} className="spec-chip">{s}</span>)}
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="philosophy">
        <div className="inner">
          <div className="quote-mark">“</div>
          <p>My creative process is grounded in visual art principles — allowing me to produce work that is detailed, expressive and cinematic, made in close collaboration with directors, performers and production teams.</p>
          <div className="attrib">— Adesola Adedayo, Creative Philosophy</div>
        </div>
      </div>
    </div>
  );
}
