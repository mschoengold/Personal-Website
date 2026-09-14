import Hero from '@/components/Hero';
import About from '@/components/About';
import Writing from '@/components/Writing';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Writing />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
