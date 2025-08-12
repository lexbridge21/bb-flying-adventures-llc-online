import React from "react";
import AfricaHero from "../components/AfricaHero";
import DiscoverAfrica from "../components/DiscoverAfrica";
import AfricaAdvisor from "../components/AfricaAdvisor";
import TopAfrica from "../components/TopAfrica";
import DesignAfrica from "../components/DesignAfrica";

const AfricaPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <AfricaHero />
      <DiscoverAfrica />
      <AfricaAdvisor />
      <TopAfrica />
      <DesignAfrica />
    </div>
  );
};

export default AfricaPage;
