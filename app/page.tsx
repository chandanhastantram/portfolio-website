import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import MatrixRain from '@/components/MatrixRain';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main>
      <MatrixRain />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
