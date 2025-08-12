import React from "react";
import SouthAmericaHero from "../components/SouthAmericaHero";
import DiscoverSouthAmerica from "../components/DicoverSouthAmerica";
import SouthAmericaAdvisor from "../components/SouthAmericaAdvisor";
import TopSouthAmerica from "../components/TopSouthAmerica";
import DesignSouthAmerica from "../components/DesignSouthAmerica";

const SouthAmericaPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <SouthAmericaHero />
      <DiscoverSouthAmerica />
      <SouthAmericaAdvisor />
      <TopSouthAmerica />
      <DesignSouthAmerica />
    </div>
  );
};

export default SouthAmericaPage;
