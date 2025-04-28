import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Highlights from "./Components/Highlights/Highlights";
import Mobnav from "./Components/Mobnav/Mobnav";
function HomePage() {
  return (
    <>
      <div className="desktop-logo">
        <Header />
      </div>

      <div className="desktop-nav">
        <Nav />
      </div>
      <div className="mobile-nav">
        <Mobnav />
      </div>
      <Hero />
      <Highlights />
      <Footer />
    </>
  );
}

export default HomePage;
