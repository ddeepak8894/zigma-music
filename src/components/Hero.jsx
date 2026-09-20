import { Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '60px' }}>
        <Row className="align-items-center g-5">
          {/* Left: text */}
          <Col lg={5}>
            <h1 className="hero-title mb-4">
              Zigma Music <br />
              <span>Production Pvt Ltd</span>
            </h1>
            <p className="hero-lead mb-4">
              India's premier devotional &amp; Marathi music label. Spreading the divine
              sounds of bhakti and the soulful melodies of Marathi music across the world.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#latest" className="btn btn-saffron">Latest Releases</a>
              <a href="#channels" className="btn btn-ghost">Our Channels ↓</a>
            </div>
          </Col>

          {/* Right: large featured video */}
          <Col lg={7}>
            <div className="hero-featured-video">
              <div className="hero-video-label">
                <span>🔴 Latest Release</span>
              </div>
              <div className="hero-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/aCKavsxqkYQ?rel=0&autoplay=0"
                  title="Latest Release"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
