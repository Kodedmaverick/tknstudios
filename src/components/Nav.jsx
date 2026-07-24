export default function Nav({ nav, view, go }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={go('wall')}>
        <span className="mark">TKN</span>
        <span className="div" />
        <span className="sub">Studios</span>
      </div>
      <div className="nav-links">
        {nav.map(([label, v]) => (
          <a key={v} href="#" className={view === v ? 'active' : ''} onClick={go(v)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
