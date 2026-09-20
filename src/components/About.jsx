import { Container, Row, Col } from 'react-bootstrap';

const FEATURES = [
  'Original Compositions',
  'High Quality Audio & Video',
  'Regular New Releases',
  'Free on YouTube',
  'Bhakti & Marathi Music',
  'Dedicated Music Team',
];

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5} className="text-center">
            <div className="about-icon-box">🕉</div>
            <div className="mt-4 d-flex justify-content-center gap-3">
              <a href="https://www.youtube.com/@zigmaMusicbhakti" target="_blank" rel="noreferrer" className="btn btn-saffron btn-sm">
                Bhakti Channel
              </a>
              <a href="https://www.youtube.com/@ZigmaMusicMarathi" target="_blank" rel="noreferrer" className="btn btn-yt btn-sm">
                Marathi Channel
              </a>
            </div>
          </Col>

          <Col lg={7}>
            <span className="section-tag">About Us</span>
            <h2 className="fw-bold mt-2 mb-3" style={{ fontSize: '2.2rem', color: '#fff' }}>
              Spreading <span style={{ color: '#FF6B35' }}>Devotion</span> Through Music
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }} className="mb-3">
              Zigma Music is a dedicated music label with two YouTube channels — one for
              bhakti devotional music and one for soulful Marathi music. Our mission is to
              spread divine vibrations and celebrate Maharashtra's rich musical heritage.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }} className="mb-4">
              We release original compositions, traditional aarti, and devotional songs
              that connect hearts to the almighty and celebrate our culture.
            </p>

            <Row className="g-2">
              {FEATURES.map(f => (
                <Col xs={12} sm={6} key={f}>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{f}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
