import React, { useRef } from "react";
import PressHero from "../components/PressHero";
import FeatureIn from "../components/FeatureIn";
import BBNews from "../components/BBNews";

const Press = () => {
  const nextSectionRef = useRef(null);
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <PressHero nextSectionRef={nextSectionRef} />
      <section ref={nextSectionRef} className="mt-7">
        <FeatureIn />
      </section>
      <BBNews />
    </div>
  );
};

export default Press;
