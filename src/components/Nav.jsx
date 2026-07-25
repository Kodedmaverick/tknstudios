import { useState } from 'react';

export default function Nav({ nav, view, go }) {
  const [open, setOpen] = useState(false);
  const pick = (v) => (e) => { setOpen(false); go(v)(e); };

  return (
    <>
      <nav className="nav rnav">
        <div className="nav-logo" onClick={pick('wall')}>
          <span className="mark">TKN</span>
          <span className="div" />
          <span className="sub">Studios</span>
        </div>
        <div className="nav-links rnav-links">
          {nav.map(([label, v]) => (
            <a key={v} href="#" className={view === v ? 'active' : ''} onClick={go(v)}>
              {label}
            </a>
          ))}
        </div>
        <button className="rnav-burger" aria-label="Menu" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="rnav-mobile">
          <div className="rnav-mobile-top">
            <div className="nav-logo">
              <span className="mark">TKN</span>
              <span className="div" />
              <span className="sub">Studios</span>
            </div>
            <button className="rnav-mobile-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="rnav-mobile-links">
            {nav.map(([label, v]) => (
              <a key={v} href="#" className={view === v ? 'active' : ''} onClick={pick(v)}>{label}</a>
            ))}
          </div>
          <div className="rnav-mobile-foot">
            <a href="https://www.instagram.com/thekingnathystudios/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.saatchiart.com/axpn_world" target="_blank" rel="noreferrer">Saatchi ↗</a>
          </div>
        </div>
      )}
    </>
  );
}
