import Navbar from './components/Navbar';
import HeroSlider  from './components/HeroSlider';
import Eventos from './components/Eventos';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/Faq/Faq';
import Prices from './components/Prices/Prices';
import Footer from './components/Footer/index';
import FixedButtons from './components/FixedButtons';

function App() { 
  const phoneNumber = "+52 65969540"

  return (
    <div className="App">
      <Navbar />
      <HeroSlider />
      <Eventos />
      <About />
      <section id='Contact'>
          <Contact />
      </section>
      <section id='FAQ'>
          <FAQ />
      </section>
      <Prices />
      <Footer />

      <FixedButtons phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;