import React from "react";
import OceaniaHero from "../components/OceaniaHero";
import DiscoverOceania from "../components/DicoverOceania";
import OceaniaAdvisor from "../components/OceaniaAdvisor";
import TopOceania from "../components/TopOceania";
import DesignOceania from "../components/DesignOceania";

const OceaniaPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <OceaniaHero />
      <DiscoverOceania />
      <OceaniaAdvisor />
      <TopOceania />
      <DesignOceania />
    </div>
  );
};

export default OceaniaPage;
