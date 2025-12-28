import Image from "next/image";
import React from "react";
import  NavbarTop from "@/app/components/molecules/Navbar";
import HeroSection from "@/app/components/templete/HomePage/HeroSection";
import Footer from "./components/molecules/Footer";
import { FeaturesSection } from "./components/molecules/HomePage/Feature";
import { ServicesSectionHomePage } from "./components/molecules/HomePage/Services";

export default function Home() {
  return (
        <>
            <NavbarTop>
                <HeroSection />
                <FeaturesSection />
                <ServicesSectionHomePage />
                <Footer/>
            </NavbarTop>
        </>
    );
}

