import React from "react";
import PolarHero from "../components/PolarHero";
import DiscoverPolar from "../components/DiscoverPolar";
import PolarAdvisor from "../components/PolarAdvisor";
import TopPolar from "../components/TopPolar";
import DesignPolar from "../components/DesignPolar";

const PolarDestinationsPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <PolarHero />
      <DiscoverPolar />
      <PolarAdvisor />
      <TopPolar />
      <DesignPolar />
    </div>
  );
};

export default PolarDestinationsPage;
