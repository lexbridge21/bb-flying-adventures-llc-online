import React from "react";
import CareerHero from "../components/CareerHero";
import WhyCareer from "../components/WhyCareer";
import WhoWeAre from "../components/WhoWeAre";
import WorkWithUs from "../components/WorkWithUs";
import WhatWeDo from "../components/WhatWeDo";
import WorkingBB from "../components/WorkingBB";

const CareersPage = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <CareerHero />
      <WhyCareer />
      <WhoWeAre />
      <WorkWithUs />
      <WhatWeDo />
      <WorkingBB />
    </div>
  );
};

export default CareersPage;
