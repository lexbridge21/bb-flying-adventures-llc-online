import React from "react";
import NorthAmericaHero from "../components/NorthAmericaHero";
import DiscoverNorthAmerica from "../components/DiscoverNorthAmerica";
import NorthAmericaAdvisor from "../components/NorthAmericaAdvisor";
import TopNorthAmerica from "../components/TopNorthAmerica";
import DesignNorthAmerica from "../components/DesignNorthAmerica";

const NorthAmericaPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <NorthAmericaHero />
      <DiscoverNorthAmerica />
      <NorthAmericaAdvisor />
      <TopNorthAmerica />
      <DesignNorthAmerica />
    </div>
  );
};

export default NorthAmericaPage;
