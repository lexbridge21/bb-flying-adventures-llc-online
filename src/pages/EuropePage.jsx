import React from "react";
import EuropeHero from "../components/EuropeHero";
import DiscoverEurope from "../components/DiscoverEurope";
import EuropeAdvisor from "../components/EuropeAdvisor";
import TopEurope from "../components/TopEurope";
import DesignEurope from "../components/DesignEurope";

const EuropePage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <EuropeHero />
      <DiscoverEurope />
      <EuropeAdvisor />
      <TopEurope />
      <DesignEurope />
    </div>
  );
};

export default EuropePage;
