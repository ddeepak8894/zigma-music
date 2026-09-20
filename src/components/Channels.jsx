import { Container, Row, Col } from 'react-bootstrap';

const CHANNELS = [
  {
    id: 'bhakti',
    name: 'Zigma Music Bhakti',
    handle: '@zigmaMusicbhakti',
    url: 'https://www.youtube.com/@zigmaMusicbhakti',
    description: 'Devotional bhakti songs, aarti, and spiritual music for daily worship and meditation. Feel the divine connection through every note.',
    icon: '🕉',
    headerBg: 'linear-gradient(135deg, #FF6B35, #e85d00)',
    tags: ['Bhajan', 'Aarti', 'Devotional', 'Spiritual'],
    embedSrc: 'https://www.youtube.com/embed/aCKavsxqkYQ?rel=0',
  },
  {
    id: 'marathi',
    name: 'Zigma Music Marathi',
    handle: '@ZigmaMusicMarathi',
    url: 'https://www.youtube.com/@ZigmaMusicMarathi',
    description: 'Soulful Marathi songs, lavani, natya sangeet, and traditional Maharashtrian folk music celebrating our culture.',
    icon: '🎶',
    headerBg: 'linear-gradient(135deg, #8B0000, #5a0000)',
    tags: ['Marathi', 'Lavani', 'Folk', 'Traditional'],
    embedSrc: 'https://www.youtube.com/embed/E2Gsw9uNMcM?rel=0',
  },
  {
    id: 'india',
    name: 'Zigma Music India',
    handle: '@zigmamusicindia',
    url: 'https://www.youtube.com/@zigmamusicindia',
    description: 'Pan-India music featuring Hindi, folk, and regional songs celebrating the diverse musical culture of India.',
    icon: '🎸',
    headerBg: 'linear-gradient(135deg, #1a6b1a, #0d4a0d)',
    tags: ['Hindi', 'Folk', 'Regional', 'India'],
    embedSrc: 'https://www.youtube.com/embed/NTjpag3YdcA?rel=0',
  },
];

export default function Channels() {
  return (
    <section id="channels" className="py-5" style={{ background: '#FFF8F0' }}>
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-tag">Our Channels</span>
          <h2 className="fw-800 mt-2" style={{ fontWeight: 800, fontSize: '2.2rem', color: '#1a0800' }}>
            Two Channels, <span style={{ color: '#FF6B35' }}>One Soul</span>
          </h2>
          <p className="text-muted mt-2">Explore our YouTube channels — each dedicated to a unique musical journey</p>
        </div>

        <Row className="g-4">
          {CHANNELS.map(ch => (
            <Col key={ch.id} lg={4} md={6}>
              <div className="channel-card h-100">
                {/* Card header */}
                <div className="channel-header" style={{ background: ch.headerBg }}>
                  <div className="channel-icon-box">{ch.icon}</div>
                  <div>
                    <h4 className="mb-0 fw-bold">{ch.name}</h4>
                    <small style={{ opacity: 0.8 }}>{ch.handle}</small>
                  </div>
                </div>

                {/* YouTube embed */}
                <div className="embed-wrapper">
                  <iframe
                    src={ch.embedSrc}
                    title={ch.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Body */}
                <div className="channel-body">
                  <p className="text-muted mb-3" style={{ fontSize: '0.92rem' }}>{ch.description}</p>
                  <div className="mb-3">
                    {ch.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <div className="d-flex gap-2 flex-wrap">
                    <a href={ch.url} target="_blank" rel="noreferrer" className="btn btn-saffron btn-sm">
                      Visit Channel
                    </a>
                    <a href={`${ch.url}?sub_confirmation=1`} target="_blank" rel="noreferrer" className="btn btn-yt btn-sm">
                      🔔 Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
