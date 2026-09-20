import { Container, Row, Col } from 'react-bootstrap';

const STATS = [
  { icon: '▶', num: 'Growing', label: 'Subscribers' },
  { icon: '🎵', num: '100+', label: 'Songs' },
  { icon: '🕉', num: '2', label: 'Channels' },
  { icon: '❤️', num: 'Millions', label: 'Listeners' },
];

export default function Stats() {
  return (
    <div className="stats-bar">
      <Container>
        <Row className="justify-content-center">
          {STATS.map(s => (
            <Col key={s.label} xs={6} md={3} className="stat-item py-2">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
