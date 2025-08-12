import React from "react";
import HoneyMoonHero from "../components/HoneyMoonHero";
import HoneyPlans from "../components/HoneyPlans";
import HoneyHotels from "../components/HoneyHotels";
import DesignTrip from "../components/DesignTrip";
import DontMiss from "../components/DontMiss";
import HoneyFaq from "../components/HoneyFaq";

const HoneyMoon = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <HoneyMoonHero />
      <HoneyPlans />
      <HoneyHotels />
      <DesignTrip />
      <DontMiss />
      <HoneyFaq />
    </div>
  );
};

export default HoneyMoon;
