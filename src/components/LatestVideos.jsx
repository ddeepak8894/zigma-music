import { Container, Row, Col } from 'react-bootstrap';

const VIDEOS = [
  { id: 'aCKavsxqkYQ', channel: 'Bhakti', color: '#FF6B35' },
  { id: 'E2Gsw9uNMcM', channel: 'Marathi', color: '#8B0000' },
  { id: 'kHnF_OrlFsg', channel: 'Bhakti', color: '#FF6B35' },
  { id: 'ghvb-ri8tW0', channel: 'Marathi', color: '#8B0000' },
  { id: 'W5mt5qB80cA', channel: 'Bhakti', color: '#FF6B35' },
  { id: 'Eu-07_Yw7Tg', channel: 'Marathi', color: '#8B0000' },
];

export default function LatestVideos() {
  return (
    <section id="latest" className="py-5" style={{ background: '#fff' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">New Releases</span>
          <h2 className="fw-bold mt-2" style={{ fontSize: '2.2rem', color: '#1a0800' }}>
            Latest <span style={{ color: '#FF6B35' }}>Videos</span>
          </h2>
          <p className="text-muted">Our most recent releases from both channels</p>
        </div>

        <Row className="g-4">
          {VIDEOS.map((v, i) => (
            <Col key={i} xs={12} sm={6} lg={4}>
              <div className="video-card">
                <div className="embed-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <span className="channel-badge" style={{ background: v.color }}>
                    {v.channel}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5 d-flex justify-content-center gap-3 flex-wrap">
          <a href="https://www.youtube.com/@zigmaMusicbhakti" target="_blank" rel="noreferrer" className="btn btn-saffron">
            ▶ Bhakti Channel
          </a>
          <a href="https://www.youtube.com/@ZigmaMusicMarathi" target="_blank" rel="noreferrer" className="btn btn-yt">
            ▶ Marathi Channel
          </a>
        </div>
      </Container>
    </section>
  );
}
