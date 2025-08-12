import React from "react";
import AboutHero from "../components/AboutHero";
import CoFounders from "../components/CoFounders";
import BetterEquation from "../components/BetterEquation";
import AboutMix from "../components/AboutMix";

const AboutUs = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <AboutHero />
      <CoFounders />
      <BetterEquation />
      <AboutMix />
    </div>
  );
};

export default AboutUs;
