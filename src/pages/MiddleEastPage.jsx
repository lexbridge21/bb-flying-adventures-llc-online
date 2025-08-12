import React from "react";
import MiddleEastHero from "../components/MiddleEastHero";
import DiscoverMiddleEast from "../components/DiscoverMiddleEast";
import MiddleEastAdvisor from "../components/MiddleEastAdvisor";
import TopMiddleEast from "../components/TopMiddleEast";
import DesignMiddleEast from "../components/DesignMiddleEast";

const MiddleEastPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <MiddleEastHero />
      <DiscoverMiddleEast />
      <MiddleEastAdvisor />
      <TopMiddleEast />
      <DesignMiddleEast />
    </div>
  );
};

export default MiddleEastPage;
