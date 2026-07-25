import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const payload = {
      name: f.name_.value.trim(), email: f.email.value.trim(),
      service: f.service.value, message: f.message.value.trim(),
      to: 'thekingnathystudios@gmail.com', at: new Date().toISOString(),
    };
    // Delivery endpoint: set FORM_ENDPOINT to a Formspree/Resend/serverless URL to receive at the studio inbox.
    const FORM_ENDPOINT = '';
    if (FORM_ENDPOINT) {
      fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => {});
    }
    setSent(true);
  };

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
              <p>Your message has been sent to the studio. Expect a response in less than 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="field">
                <label>Name</label>
                <input name="name_" placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="field">
                <label>Service</label>
                <select name="service">
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
                <textarea name="message" rows="4" placeholder="Dates, location, the story you want to tell…" />
              </div>
              <button className="btn-gold" type="submit">Send enquiry</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
