import React from "react";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import SelectedProjects from "./components/SelectedProjects";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Partners from "./components/Partners";

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
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
