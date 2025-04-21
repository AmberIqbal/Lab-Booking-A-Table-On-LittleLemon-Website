import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
function HomePage() {
  return (
    <>
      <Header />
      <Nav />

      <Hero />
      <Highlights />
      <Footer />
    </>
  );
}

export default HomePage;
