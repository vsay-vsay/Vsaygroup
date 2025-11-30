import Image from "next/image";
import React from "react";
import  NavbarTop from "@/app/components/molecules/Navbar";
import HeroSection from "@/app/components/templete/HomePage/HeroSection";
import Footer from "./components/molecules/Footer";

export default function Home() {
  return (
        <>
            <NavbarTop>
                <HeroSection />
                <Footer/>
            </NavbarTop>
        </>
    );
}

