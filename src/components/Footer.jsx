import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start g-4 mb-4">
          <Col md={4}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/logo.jpg" alt="Zigma Music" style={{ width: 48, height: 48, objectFit: 'contain' }} />
              <div>
                <div className="footer-brand">Zigma <span>Music</span></div>
                <div style={{ color: '#FFD700', fontSize: '0.65rem', letterSpacing: '1.5px' }}>PRODUCTION PVT LTD</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', maxWidth: 260 }}>
              India's premier devotional &amp; Marathi music label — spreading divine music for every soul.
            </p>
          </Col>

          <Col md={4}>
            <h6 style={{ color: '#FFD700', fontWeight: 700, marginBottom: 14 }}>Our Channels</h6>
            <div className="d-flex flex-column gap-2">
              <a href="https://www.youtube.com/@zigmaMusicbhakti" target="_blank" rel="noreferrer"
                style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                🕉 Zigma Music Bhakti
              </a>
              <a href="https://www.youtube.com/@ZigmaMusicMarathi" target="_blank" rel="noreferrer"
                style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem' }}>
                🎶 Zigma Music Marathi
              </a>
            </div>
          </Col>

          <Col md={4}>
            <h6 style={{ color: '#FFD700', fontWeight: 700, marginBottom: 14 }}>Follow Us</h6>
            <a href="https://www.youtube.com/@zigmaMusicbhakti" target="_blank" rel="noreferrer" className="social-link me-2">
              ▶
            </a>
            <a href="https://www.youtube.com/@ZigmaMusicMarathi" target="_blank" rel="noreferrer" className="social-link">
              ▶
            </a>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />

        <div className="text-center" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Zigma Music Production Pvt Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
