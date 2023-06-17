import React from "react";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import SelectedProjects from "./components/SelectedProjects";
import Services from "./components/Services";
import Workflow from "./components/Workflow";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Workflow />
      <Benefits />
      <Services />
      <SelectedProjects />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
