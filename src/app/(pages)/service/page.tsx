import React from "react";
import  NavbarTop from "@/app/components/molecules/Navbar";
import Footer from "@/app/components/molecules/Footer";
import ServicesPage from "@/app/components/templete/ServicePage/Servicepage";

export default function Services() {
  return (
        <>
            <NavbarTop>
                <ServicesPage/>
                <Footer/>
            </NavbarTop>
        </>
    );
}
