import React from "react";
import "../../App.css";
import Cards from "../Cards";
import CardsProduk from "./Produk/CardsProduk";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <CardsProduk />
      <Footer />
    </>
  );
}

export default Home;
