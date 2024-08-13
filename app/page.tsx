import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact /> 
      <Footer />
    </>
  );
}
