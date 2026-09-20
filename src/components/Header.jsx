import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{
        background: scrolled ? 'rgba(26,8,0,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s',
        padding: scrolled ? '10px 0' : '18px 0',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <img src="/zigma-music/logo.jpg" alt="Zigma Music" style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover' }} />
          <div>
            <div style={{ color: '#fff', fontWeight: 800, lineHeight: 1.1, fontSize: '1.1rem' }}>
              Zigma Music
            </div>
            <div style={{ color: '#FFD700', fontSize: '0.65rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Production Pvt Ltd
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
          <span style={{ color: '#fff', fontSize: '1.2rem' }}>☰</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="nav">
          <Nav className="ms-auto" style={{ gap: '8px' }}>
            {['home', 'channels', 'latest', 'about', 'contact'].map(id => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, textTransform: 'capitalize' }}
                className="nav-hover"
              >
                {id}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
