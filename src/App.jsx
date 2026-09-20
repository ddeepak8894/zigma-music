import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Channels from './components/Channels';
import LatestVideos from './components/LatestVideos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Channels />
      <LatestVideos />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
