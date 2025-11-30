import React from "react";
import  NavbarTop from "@/app/components/molecules/Navbar";
import Footer from "@/app/components/molecules/Footer";
import AboutUsTemplete from "@/app/components/templete/AboutUs.tsx/AboutUsTemplete";

export default function AboutUs() {
  return (
        <>
            <NavbarTop>
                <AboutUsTemplete />
                <Footer/>
            </NavbarTop>
        </>
    );
}
