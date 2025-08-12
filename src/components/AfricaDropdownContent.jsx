import { Link, useLocation } from "react-router-dom";
import beachImage from "../assets/beach.jpg";

export default function AfricaDropdownContent({ closeDropdown }) {
  const location = useLocation();

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
    <div className="flex items-start gap-6 font-chiswick font-normal">
      <img
        src={beachImage}
        alt="Destination"
        className="w-44 md:w-66 h-36 md:h-70 object-cover "
      />

      <ul className="space-y-2 text-sm md:text-base lg:text-[0.8rem] font-chiswick font-normal">
        {regions.map((region) => (
          <li key={region.name}>
            <Link
              to={region.path}
              className={`hover:underline ${
                location.pathname === region.path
                  ? "text-gray-600 underline"
                  : ""
              }`}
              onClick={closeDropdown}
            >
              {region.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
