import React from "react";
import BookNowHero from "../components/BookNowHero";
import DesignTrip from "../components/DesignTrip";
import BookChance from "../components/BookChance";
import BookReason from "../components/BookReason";
import DontMiss from "../components/DontMiss";
import Faq from "../components/Faq";
import StarReview from "../components/StarReview";

const BookNowPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <BookNowHero />
      <DesignTrip />
      <BookChance />
      <BookReason />
      <StarReview />
      <DontMiss />
      <Faq />
    </div>
  );
};

export default BookNowPage;
