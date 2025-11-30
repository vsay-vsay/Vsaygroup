import React from "react";
import  NavbarTop from "@/app/components/molecules/Navbar";
import Footer from "@/app/components/molecules/Footer";
import { WorldMapContactUs } from "@/app/components/molecules/ContactUs/WorldMap";
import ContactUsForm from "@/app/components/templete/ContactUs/ContactUsForm";

export default function Contact() {
  return (
        <>
            <NavbarTop>
                <WorldMapContactUs />
                <ContactUsForm />
                <Footer/>
            </NavbarTop>
        </>
    );
}

