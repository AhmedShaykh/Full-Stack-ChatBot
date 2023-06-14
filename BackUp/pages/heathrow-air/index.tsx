import React from 'react';
import Navbar from '../../src/components/Navbar/Navbar';
import HeroSection from '../../src/components/hero-section/HeroSection';
import BrandCards from '../../src/components/brand-cards/BrandCards';
import ProsCards from '../../src/components/pros-cards/ProsCards';
import HomeCards from '../../src/components/home-cards/HomeCards';
import TopWorldwideCards from '../../src/components/top-worldwide-cards';
import FAQMain from '../../src/components/FAQ';
import Bar from '../../src/components/bar';
import TabCars from '../../src/components/tabcars';

const HeathrowAir = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <BrandCards />
            <ProsCards />
            <HomeCards />
            <TabCars />
            <TopWorldwideCards />
            <FAQMain />
            <Bar />
        </>
    )
};

export default HeathrowAir;