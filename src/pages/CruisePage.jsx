import React from "react";
import CruiseHero from "../components/CruiseHero";
import BookCruise from "../components/BookCruise";
import DesignTrip from "../components/DesignTrip";
import DontMiss from "../components/DontMiss";
import CruiseFaq from "../components/CruiseFaq";
import CruiseTrip from "../components/CruiseTrip";

const CruisePage = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <CruiseHero />
      <BookCruise />
      <CruiseTrip />
      <DesignTrip />
      <DontMiss />
      <CruiseFaq />
    </div>
  );
};

export default CruisePage;
