import React from "react";
import HeroJet from "../components/HeroJet";
import JetBB from "../components/JetBB";
import RedefineJet from "../components/RedefineJet";
import DontMiss from "../components/DontMiss";
import PrivateQuestions from "../components/PrivateQuestion";

const PrivateJetPage = () => {
  return (
    <div className="font-chiswick  bg-[#f8f5f1]">
      <HeroJet />
      <JetBB />
      <RedefineJet />
      <DontMiss />
      <PrivateQuestions />
    </div>
  );
};

export default PrivateJetPage;
