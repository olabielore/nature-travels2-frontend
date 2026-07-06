
import Hero from '@/components/Hero/Hero';
import PopularStories from '@/components/PopularStories/PopularStories';
import About from '@/components/home/About/About';
import OurTravellers from '@/components/home/OurTravellers/OurTravellers';
import Join from '@/components/Join/Join';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularStories />
      <About />
      <OurTravellers />
      <Join />
    </>
  );
}