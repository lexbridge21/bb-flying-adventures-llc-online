import React from "react";
import CelebrationHero from "../components/CelebrationHero";
import CelebrationBook from "../components/CelebrationBook";
import FeatureIn from "../components/FeatureIn";
import CelebrationHotels from "../components/CelebrationHotels";
import DesignTrip from "../components/DesignTrip";
import DontMiss from "../components/DontMiss";
import CelebrationFaq from "../components/CelebrationFaq";

const CelebrationPage = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <CelebrationHero />
      <CelebrationBook />
      <FeatureIn />
      <CelebrationHotels />
      <DesignTrip />
      <DontMiss />
      <CelebrationFaq />
    </div>
  );
};

export default CelebrationPage;
