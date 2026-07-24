import { SERVICES } from '../data.js';

export default function Services({ goContact }) {
  return (
    <div className="view">
      <div className="wrap">
        <div className="eyebrow">Services</div>
        <h1 className="h1">What we make</h1>
        <p className="lead">
          Every engagement is bespoke. Below is where we begin — reach out and we’ll shape a package around your story.
        </p>
        <div className="svc-grid">
          {SERVICES.map((sv) => (
            <div key={sv.no} className="svc">
              <div className="no">{sv.no}</div>
              <div className="t">{sv.title}</div>
              <p>{sv.body}</p>
              <div className="foot">
                <span>{sv.meta}</span>
                <a href="#" onClick={goContact}>Enquire →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
