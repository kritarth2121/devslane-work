import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Uppermid from "./components/Uppermid";
import Uppermid1 from "./components/Uppermid1";
import Centermid from "./components/Centermid";
import Hero from "./components/Hero";
import Carousel1 from "./components/Carousel1";
import Lowermid from "./components/Lowermid";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Nav />
      <Header />
      <Hero/>
      <Uppermid />
      <Uppermid1 />
      <Carousel1 />
      <Centermid />
      <Lowermid/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
