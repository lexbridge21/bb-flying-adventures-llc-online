import React from "react";
import AsiaHero from "../components/AsiaHero";
import DiscoverAsia from "../components/DiscoverAsia";
import AsiaAdvisor from "../components/AsiaAdvisor";
import TopAsia from "../components/TopAsia";
import DesignAsia from "../components/DesignAsia";

const AsiaPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <AsiaHero />
      <DiscoverAsia />
      <AsiaAdvisor />
      <TopAsia />
      <DesignAsia />
    </div>
  );
};

export default AsiaPage;
