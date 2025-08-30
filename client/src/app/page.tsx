import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Projects from '@/components/Projects';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Projects />
      <ExperienceTimeline />
      <Skills />
      <Contact />
    </>
  );
}
