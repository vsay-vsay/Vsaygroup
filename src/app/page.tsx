import React from "react";
import  NavbarTop from "@/app/components/molecules/Navbar";
import HeroSection from "@/app/components/templete/HomePage/HeroSection";
import Footer from "./components/molecules/Footer";
import { FeaturesSection } from "./components/molecules/HomePage/Feature";
import { ServicesSectionHomePage } from "./components/molecules/HomePage/Services";
import GetStarted from "./components/molecules/HomePage/GetStarted";
import WhyChosseUs from "./components/molecules/HomePage/WhyChosseUs";

export default function Home() {
  return (
        <>
            <NavbarTop>
                <HeroSection />
                <FeaturesSection />
                <WhyChosseUs />
                <ServicesSectionHomePage />
                <GetStarted />
                <Footer/>
            </NavbarTop>
        </>
    );
}

// Why Choose VSAY Solutions?
// Transform your business with our innovative approach and comprehensive technology solutions.

// Expert Training Programs
// 24/7 Technical Support
// Scalable Solutions
// Industry Best Practices

// Ready to Transform Your Business?
// Join our digital learning ecosystem powered by Microsoft & AWS. Let's unlock new horizons together and nurture profound educational, professional, and social growth.


