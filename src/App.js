import './App.css';
import Franchise from './components/Franchise';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhySection from './components/WhySection';
import Partner from './components/Partner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhySection />
      <Franchise />
      <Partner />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
