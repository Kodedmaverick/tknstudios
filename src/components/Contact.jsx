import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="view">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="h1">Let’s make<br />something timeless</h1>
          <p className="lead" style={{ maxWidth: 420 }}>
            Tell us about the shoot you have in mind. We reply to every enquiry within two working days.
          </p>
          <div className="contact-info">
            <div><div className="k">Studio</div><div className="v">Lagos, Nigeria</div></div>
            <div><div className="k">Instagram</div><a className="v" href="https://www.instagram.com/thekingnathystudios/" target="_blank" rel="noreferrer">@thekingnathystudios</a></div>
            <div><div className="k">Portfolio</div><a className="v" href="https://www.saatchiart.com/axpn_world" target="_blank" rel="noreferrer">Saatchi Art ↗</a></div>
          </div>
        </div>

        <div className="form">
          {sent ? (
            <div className="sent">
              <div className="check">✓</div>
              <div className="t">Thank you</div>
              <p>Your enquiry has been noted. We’ll be in touch shortly. <span className="note">(Demo form — wire up to email / a form service.)</span></p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="field">
                <label>Name</label>
                <input placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
              <div className="field">
                <label>Service</label>
                <select>
                  <option>Portrait session</option>
                  <option>Fashion / Editorial</option>
                  <option>Beauty</option>
                  <option>Wedding / Event</option>
                  <option>Cinematic film</option>
                  <option>Brand / Commercial</option>
                </select>
              </div>
              <div className="field">
                <label>Tell us more</label>
                <textarea rows="4" placeholder="Dates, location, the story you want to tell…" />
              </div>
              <button className="btn-gold" type="submit">Send enquiry</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
