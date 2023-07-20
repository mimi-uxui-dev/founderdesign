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
import Faqs from "./components/Faqs";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Workflow />
      <Benefits />
      <Services />
      <SelectedProjects />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  );
}

export default Home;
