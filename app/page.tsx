import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Clinets from '../components/clinets';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact /> 
      <Clinets />
      <Footer />
    </>
  );
}
