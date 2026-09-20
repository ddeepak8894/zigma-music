import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-5" style={{ background: '#FFF8F0' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">Get In Touch</span>
          <h2 className="fw-bold mt-2" style={{ fontSize: '2.2rem', color: '#1a0800' }}>
            Contact <span style={{ color: '#FF6B35' }}>Us</span>
          </h2>
          <p className="text-muted">For collaborations, music licensing, or any inquiry</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* Info */}
          <Col lg={4}>
            <div className="mb-2">
              <div className="contact-info-item">
                <div className="contact-info-icon">▶</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a0800', fontSize: '0.9rem' }}>Bhakti Channel</div>
                  <a href="https://www.youtube.com/@zigmaMusicbhakti" target="_blank" rel="noreferrer"
                    style={{ color: '#FF6B35', fontSize: '0.85rem', textDecoration: 'none' }}>
                    @zigmaMusicbhakti
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">▶</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a0800', fontSize: '0.9rem' }}>Marathi Channel</div>
                  <a href="https://www.youtube.com/@ZigmaMusicMarathi" target="_blank" rel="noreferrer"
                    style={{ color: '#FF6B35', fontSize: '0.85rem', textDecoration: 'none' }}>
                    @ZigmaMusicMarathi
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">✉</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a0800', fontSize: '0.9rem' }}>Email</div>
                  <a href="mailto:zigmabusiness1@gmail.com" style={{ color: '#FF6B35', fontSize: '0.85rem', textDecoration: 'none' }}>zigmabusiness1@gmail.com</a>
                </div>
              </div>
            </div>
          </Col>

          {/* Form */}
          <Col lg={7}>
            <div className="contact-card">
              {sent ? (
                <div className="text-center py-4">
                  <div style={{ fontSize: '3rem' }}>✅</div>
                  <h5 className="mt-3 fw-bold" style={{ color: '#1a0800' }}>Message Sent!</h5>
                  <p className="text-muted">We'll get back to you soon. 🙏</p>
                  <button className="btn btn-saffron" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <Row className="g-3">
                    <Col sm={6}>
                      <input name="name" value={form.name} onChange={handle}
                        className="contact-input" placeholder="Your Name" required />
                    </Col>
                    <Col sm={6}>
                      <input name="email" type="email" value={form.email} onChange={handle}
                        className="contact-input" placeholder="Your Email" required />
                    </Col>
                    <Col sm={12}>
                      <input name="subject" value={form.subject} onChange={handle}
                        className="contact-input" placeholder="Subject" />
                    </Col>
                    <Col sm={12}>
                      <textarea name="message" value={form.message} onChange={handle}
                        className="contact-input" placeholder="Your Message" required />
                    </Col>
                    <Col sm={12}>
                      <button type="submit" className="btn btn-saffron w-100">
                        Send Message ✈
                      </button>
                    </Col>
                  </Row>
                </form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
