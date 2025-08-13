import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmartsuppChat from "./components/SmartsuppChat";

// Import all your pages
import HomePage from "./pages/HomePage";
import AfricaPage from "./pages/AfricaPage";
import AsiaPage from "./pages/AsiaPage";
import EuropePage from "./pages/EuropePage";
import CaribbeanPage from "./pages/CaribbeanPage";
import CentralAmericaPage from "./pages/CentralAmericaPage";
import MiddleEastPage from "./pages/MiddleEastPage";
import NorthAmericaPage from "./pages/NorthAmericaPage";
import OceaniaPage from "./pages/OceaniaPage";
import PolarDestinationsPage from "./pages/PolarDestinationsPage";
import SouthAmericaPage from "./pages/SouthAmericaPage";
import CompanyPage from "./pages/CompanyPage";
import CategoriesPage from "./pages/CategoriesPage";
import PartnersPage from "./pages/PartnersPage";
import PrivateJetPage from "./pages/PrivateJetPage";
import AboutUs from "./pages/AboutUs";
import TheJournal from "./pages/TheJournal";
import Press from "./pages/Press";
import CareersPage from "./pages/CareersPage";
import ContactUsPage from "./pages/ContactUsPage";
import PartnerWithUsPage from "./pages/PartnerWithUsPage";
import FaqPage from "./pages/FaqPage";
import BookNowPage from "./pages/BookNowPage";
import ScrollToTop from "./components/ScrollToTop";
import HoneyMoon from "./pages/HoneyMoon";
import SummerPage from "./pages/SummerPage";
import CruisePage from "./pages/CruisePage";
import ItinerariesTourPage from "./pages/ItinerariesTourPage";
import CelebrationPage from "./pages/CelebrationPage";
import SafariPage from "./pages/SafariPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import SiteOverview from "./components/SiteOverview";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/africa" element={<AfricaPage />} />
        <Route path="/asia" element={<AsiaPage />} />
        <Route path="/europe" element={<EuropePage />} />
        <Route path="/caribbean" element={<CaribbeanPage />} />
        <Route path="/central-america" element={<CentralAmericaPage />} />
        <Route path="/middle-east" element={<MiddleEastPage />} />
        <Route path="/north-america" element={<NorthAmericaPage />} />
        <Route path="/oceania" element={<OceaniaPage />} />
        <Route path="/polar-destinations" element={<PolarDestinationsPage />} />
        <Route path="/south-america" element={<SouthAmericaPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/private-jets" element={<PrivateJetPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/the-journal" element={<TheJournal />} />
        <Route path="/press" element={<Press />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/book-now" element={<BookNowPage />} />
        <Route path="/book-now" element={<BookNowPage />} />
        <Route path="/honeymoons" element={<HoneyMoon />} />
        <Route path="/summer" element={<SummerPage />} />
        <Route path="/cruises" element={<CruisePage />} />
        <Route path="/itineraries-tour" element={<ItinerariesTourPage />} />
        <Route path="/celebrate" element={<CelebrationPage />} />
        <Route path="/safari" element={<SafariPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/site-overview" element={<SiteOverview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SmartsuppChat />
      <Footer />
    </>
  );
}
