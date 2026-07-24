export function DetailPanel({ photo, onClose, onViewAll }) {
  return (
    <div className="overlay detail" onClick={onClose}>
      <div className="detail-card" onClick={(e) => e.stopPropagation()}>
        <div className="img" style={{ background: photo.color }}>
          <img src={photo.src} alt={photo.title} />
        </div>
        <div className="detail-body">
          <div className="cat">{photo.cat} · {photo.year}</div>
          <h2>{photo.title}</h2>
          <p>{photo.desc}</p>
          <div className="detail-facts">
            <div><div className="k">Discipline</div><div className="v">{photo.cat}</div></div>
            <div><div className="k">Mood</div><div className="v">{photo.mood}</div></div>
            <div><div className="k">Location</div><div className="v">{photo.location}</div></div>
            <div><div className="k">Client</div><div className="v">{photo.client}</div></div>
          </div>
          <button className="btn-gold" style={{ marginTop: 26 }} onClick={onViewAll}>View all photography →</button>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <div className="overlay lightbox" onClick={onClose}>
      <div className="lb-arrow left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</div>
      <div className="lb-fig" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.title} />
        <div style={{ marginTop: 18, textAlign: 'center' }}>
          <div className="t">{photo.title}</div>
          <div className="m">{photo.cat} · {photo.location}</div>
        </div>
      </div>
      <div className="lb-arrow right" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</div>
      <button className="lb-close" onClick={onClose}>×</button>
    </div>
  );
}

export function ReelModal({ onClose }) {
  return (
    <div className="overlay reel" onClick={onClose}>
      <div className="reel-frame" onClick={(e) => e.stopPropagation()}>
        <div className="ring"><i /></div>
        <div className="t">Showreel goes here</div>
        <p>Drop in a Vimeo / YouTube embed or an MP4 and it will play in this frame. Placeholder for now.</p>
      </div>
      <button className="reel-close" onClick={onClose}>×</button>
    </div>
  );
}
