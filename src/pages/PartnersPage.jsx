import { useRef } from "react";
import PartnerHero from "../components/PartnerHero";
import BBNetwork from "../components/BBNetwork";
import PartnerBook from "../components/PartnerBook";
import CruisePartner from "../components/CruisePartner";

export default function PartnerPage() {
  const nextSectionRef = useRef(null);

  return (
    <>
      <div className="font-chiswick bg-[#f8f5f1]">
        <PartnerHero nextSectionRef={nextSectionRef} />
        <section ref={nextSectionRef} className="h-screen">
          <BBNetwork />
        </section>
        <CruisePartner />
        <PartnerBook />
      </div>
    </>
  );
}
