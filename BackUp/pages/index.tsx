import BrandCards from '../src/components/brand-cards/BrandCards';
import HeroSection from '../src/components/hero-section/HeroSection';
import HomeCards from '../src/components/home-cards/HomeCards';
import Navbar from '../src/components/Navbar/Navbar';
import ProsCards from '../src/components/pros-cards/ProsCards';
import TopWorldwideCards from '../src/components/top-worldwide-cards';
import FAQMain from '../src/components/FAQ';
import Bar from '../src/components/bar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandCards />
      <ProsCards />
      <HomeCards />
      <TopWorldwideCards />
      <FAQMain />
      <Bar />
    </>
  )
};

export default Home;