import React from "react";
import CaribbeanHero from "../components/CaribbeanHero";
import DiscoverCaribbean from "../components/DiscoverCaribbean";
import CaribbeanAdvisor from "../components/CaribbeanAdvisor";
import TopCaribbean from "../components/TopCaribbean";
import DesignCaribbean from "../components/DesignCaribbean";

const CaribbeanPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <CaribbeanHero />
      <DiscoverCaribbean />
      <CaribbeanAdvisor />
      <TopCaribbean />
      <DesignCaribbean />
    </div>
  );
};

export default CaribbeanPage;
