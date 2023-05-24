"use client";
import React from 'react';
import HeroSection from '@/components/hero-section/HeroSection';
import BrandCards from '@/components/brand-cards/BrandCards';
import ProsCards from '@/components/pros-cards/ProsCards';
import HomeCards from '@/components/home-cards/HomeCards';
import TopWorldwideCards from '@/components/top-worldwide-cards';
import FAQMain from '@/components/FAQ';
import TabCars from '@/components/tabcars';

const ChicagoAir = () => {
    return (
        <>
            <HeroSection />
            <BrandCards />
            <ProsCards />
            <HomeCards />
            <TabCars />
            <TopWorldwideCards />
            <FAQMain />
        </>
    )
};

export default ChicagoAir;