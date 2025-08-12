import React from "react";
import TravelCategory from "../components/TravelCategory";
import CategoryStyle from "../components/CategoryStyle";
import TravelBetter from "../components/TravelBetter";
import Faq from "../components/Faq";

const CategoriesPage = () => {
  return (
    <div className="font-chiswick bg-[#f8f5f1]">
      <TravelCategory />
      <CategoryStyle />
      <TravelBetter />
      <Faq />
    </div>
  );
};

export default CategoriesPage;
