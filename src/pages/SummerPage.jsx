import React from "react";
import SummerHero from "../components/SummerHero";
import SummerAdvisor from "../components/SummerAdvisor";
import SummerDeserves from "../components/SummerDeserves";
import DesignTrip from "../components/DesignTrip";
import DontMiss from "../components/DontMiss";
import SummerFaq from "../components/SummerFaq";
import SummerHotlist from "../components/SummerHotlist";
import SummerHotSwiper from "../components/SummerHotSwiper";

const SummerPage = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <SummerHero />
      <SummerAdvisor />
      <SummerDeserves />
      <SummerHotlist />
      <SummerHotSwiper />
      <DesignTrip />
      <DontMiss />
      <SummerFaq />
    </div>
  );
};

export default SummerPage;
