import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Showcase />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
