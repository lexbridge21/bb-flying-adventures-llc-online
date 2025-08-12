import React from "react";
import ItinerariesHero from "../components/ItinerariesHero";
import ItinerariesBook from "../components/ItinereriesBook";
import FeatureIn from "../components/FeatureIn";
import DesignTrip from "../components/DesignTrip";
import DontMiss from "../components/DontMiss";
import ItinerariesFaq from "../components/ItinerariesFaq";

const ItinerariesTourPage = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <ItinerariesHero />
      <ItinerariesBook />
      <FeatureIn />
      <DesignTrip />
      <DontMiss />
      <ItinerariesFaq />
    </div>
  );
};

export default ItinerariesTourPage;
