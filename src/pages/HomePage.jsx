import { useRef } from "react";
import Hero from "../components/Hero";
import Advisor from "../components/Advisor";
import NextTrip from "../components/NextTrip";
import FeatureIn from "../components/FeatureIn";
import NextLevel from "../components/NextLevel";
import DefinitiveGuide from "../components/DefinitiveGuide";
import TravelInspiration from "../components/TravelInspiration";
import DontMiss from "../components/DontMiss";
import WhyWork from "../components/WhyWork";
import StarReview from "../components/StarReview";
import FeatureHotels from "../components/FeatureHotels";
import Questions from "../components/Questions";
import TravelTips from "../components/TravelTips";

export default function HomePage() {
  const nextSectionRef = useRef(null);

  return (
    <>
      <Hero nextSectionRef={nextSectionRef} />
      <div className="font-chiswick bg-[#f8f5f1]">
        {/* Next Section */}
        <div ref={nextSectionRef}>
          <Advisor />
        </div>
        <NextTrip />
        <FeatureIn />
        <NextLevel />
        <DefinitiveGuide />
        <TravelInspiration />
        <DontMiss />
        <WhyWork />
        <FeatureHotels />
        <StarReview />
        <TravelTips />
        <Questions />
      </div>
    </>
  );
}
