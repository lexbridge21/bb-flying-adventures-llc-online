import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (menu) =>
    setActiveDropdown((prev) => (prev === menu ? null : menu));

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const linkClasses = (path) =>
    `block py-2 ${
      location.pathname === path ? "text-gray-600 underline" : "text-black"
    }`;

  const regions = [
    { name: "Africa", path: "/africa" },
    { name: "Asia", path: "/asia" },
    { name: "The Caribbean", path: "/caribbean" },
    { name: "Central America", path: "/central-america" },
    { name: "Europe", path: "/europe" },
    { name: "The Middle East", path: "/middle-east" },
    { name: "North America", path: "/north-america" },
    { name: "Oceania", path: "/oceania" },
    { name: "Polar Destinations", path: "/polar-destinations" },
    { name: "South America", path: "/south-america" },
  ];

  return (
    <div className="md:hidden ">
      <button onClick={() => setOpen(!open)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {open && (
        <div className="bg-white/90 backdrop-blur-md border-b  border-white/20 font-chiswick font-normal absolute top-16 left-0 w-full uppercase  shadow-lg p-6 space-y-4 text-2xl md:text-base z-50">
          {/* Destinations Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("destinations")}
              className="flex justify-between w-full py-2 uppercase"
            >
              Destinations
              <FiChevronDown
                className={`transition-transform ${
                  activeDropdown === "destinations" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeDropdown === "destinations" ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="pl-5 py-3 text-xl mt-2 space-y-2 bg-[#f8f5f1]">
                {regions.map((region) => (
                  <li key={region.name}>
                    <Link
                      to={region.path}
                      className={`hover:underline ${
                        location.pathname === region.path
                          ? "text-gray-600 underline"
                          : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {region.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("company")}
              className="flex justify-between w-full py-2 uppercase"
            >
              Company
              <FiChevronDown
                className={`transition-transform ${
                  activeDropdown === "company" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeDropdown === "company" ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="pl-4 text-xl p-3 mt-2 space-y-2 bg-[#f8f5f1]">
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
                      onClick={closeMenu}
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

          {/* Other Nav Links */}
          <Link
            to="/categories"
            className={linkClasses("/categories")}
            onClick={closeMenu}
          >
            Categories
          </Link>
          <Link
            to="/partners"
            className={linkClasses("/partners")}
            onClick={closeMenu}
          >
            Partners
          </Link>
          <Link
            to="/private-jets"
            className={linkClasses("/private-jets")}
            onClick={closeMenu}
          >
            Private Jets
          </Link>

          <Link to="book-now" className="cursor-pointer" onClick={closeMenu}>
            <button className="bg-black text-xl rounded-xl border text-white hover:bg-transparent hover:text-black w-full py-1 cursor-pointer">
              BOOK WITH US
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
