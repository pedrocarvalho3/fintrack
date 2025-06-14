import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function HomeContainer() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      <Hero />

      <Features />

      <Cta />

      <Footer />
    </div>
  );
}
