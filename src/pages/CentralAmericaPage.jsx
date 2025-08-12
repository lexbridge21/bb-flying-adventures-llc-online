import React from "react";
import CentralAmericaHero from "../components/CentralAmericaHero";
import DiscoverCentralAmerica from "../components/DiscoverCentralAmerica";
import CentralAmericaAdvisor from "../components/CentralAmericaAdvisor";
import TopCentralAmerica from "../components/TopCentralAmerica";
import DesignCentralAmerica from "../components/DesignCentralAmerica";

const CentralAmericaPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <CentralAmericaHero />
      <DiscoverCentralAmerica />
      <CentralAmericaAdvisor />
      <TopCentralAmerica />
      <DesignCentralAmerica />
    </div>
  );
};

export default CentralAmericaPage;
