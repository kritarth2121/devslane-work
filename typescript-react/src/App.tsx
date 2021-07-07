import React from "react";
import Nav from "./components/Nav";
import Subnav from "./components/Subnav";
import Uppermid from "./components/Uppermid";
import Uppermid1 from "./components/Uppermid1";
import Centermid from "./components/Centermid";
import Hero from "./components/Hero";
import Lowermid from "./components/Lowermid";
import About from "./components/About";
import Gift from "./components/Gift";
import Reward from "./components/Reward";
import Footer from "./components/Footer";
import {BrowserRouter,Route} from "react-router-dom";
interface Props {};
const App: React.FC<Props> = (props) => {
  const isreward = window.location.pathname === "/reward";
  const isgift = window.location.pathname === "/gift";

  return (
    <div className="app overflow-x-hidden">
      <BrowserRouter >
      
      <Nav />
      <Subnav />

      <Route path="/reward"><Reward/></Route>
      <Route path="/gift"><Gift></Gift></Route>

      <Hero />
      <Uppermid />
      <Uppermid1 />
      <Centermid />
      <Lowermid />
      <About />
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
