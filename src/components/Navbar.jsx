import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import AfricaDropdownContent from "./AfricaDropdownContent";
import MobileMenu from "./MobileMenu";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (menu) =>
    setActiveDropdown((prev) => (prev === menu ? null : menu));

  const closeDropdown = () => setActiveDropdown(null);

  const navLinkClasses = (path) =>
    `hover:text-gray-500 ${
      location.pathname === path ? "text-gray-600 underline" : "text-black"
    }`;

  return (
    <nav className=" bg-white/30 backdrop-blur-md border-b  border-white/20  font-chiswick uppercase font-normal relative  z-50">
      <div
        className="
    flex items-center justify-between
    px-4 md:px-3 lg:px-10
    h-16 md:h-20 lg:h-20
    text-sm md:text-base lg:text-lg lg:py-5
  "
      >
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex  items-center space-x-6 md:space-x-8 md:text-[15px]  text-sm md:text-base  lg:text-[0.9rem] font-semibold font-chiswick">
          <button
            className="flex items-center gap-1 uppercase hover:text-gray-500"
            onClick={() => toggleDropdown("destinations")}
          >
            Destinations
            <FiChevronDown
              className={`transition-transform ${
                activeDropdown === "destinations" ? "rotate-180" : ""
              }`}
            />
          </button>

          <Link to="/categories" className={navLinkClasses("/categories")}>
            Categories
          </Link>
          <Link to="/partners" className={navLinkClasses("/partners")}>
            Partners
          </Link>
          <Link to="/private-jets" className={navLinkClasses("/private-jets")}>
            Private Jets
          </Link>

          <button
            className="flex items-center gap-1 uppercase hover:text-gray-500"
            onClick={() => toggleDropdown("company")}
          >
            Company
            <FiChevronDown
              className={`transition-transform ${
                activeDropdown === "company" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <Link to="/book-now">
          <button className="hidden md:block bg-black  hover:bg-white hover:text-black text-white px-3 py-2 md:px-1 md:ml-3 md:py-2 text-xs md:text-[10px] lg:text-base lg:px-3 transition  border cursor-pointer">
            BOOK WITH US
          </button>
        </Link>

        <MobileMenu />
      </div>

      {/* Destinations Dropdown */}
      <div
        className={`absolute left-0 w-full bg-white/90 backdrop-blur-md  border-white/20 shadow-md border-t transition-all duration-300 overflow-hidden ${
          activeDropdown === "destinations"
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-4 md:py-6">
          <AfricaDropdownContent closeDropdown={closeDropdown} />
        </div>
      </div>

      {/* Company Dropdown */}
      <div
        className={`absolute left-0 w-full bg-white/90 backdrop-blur-md  border-white/20 shadow-md border-t transition-all duration-300 overflow-hidden ${
          activeDropdown === "company"
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-4 md:py-6">
          <ul className="space-y-2 text-sm md:text-base lg:text-lg font-chiswick font-normal">
            {[
              { name: "About Us", path: "/about-us" },
              { name: "Press", path: "/press" },
              { name: "Careers", path: "/careers" },
              { name: "Contact Us", path: "/contact-us" },
              { name: "FAQ", path: "/faq" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={closeDropdown}
                  className={`hover:underline ${
                    location.pathname === item.path
                      ? "text-gray-600 underline"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
