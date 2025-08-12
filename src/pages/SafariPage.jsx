import React from "react";
import SafariHero from "../components/SafariHero";
import SafariBook from "../components/SafariBook";
import DesignTrip from "../components/DesignTrip";
import DontMiss from "../components/DontMiss";
import SafariFaq from "../components/SafariFaq";

const SafariPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <SafariHero />
      <SafariBook />
      <DesignTrip />
      <DontMiss />
      <SafariFaq />
    </div>
  );
};

export default SafariPage;
