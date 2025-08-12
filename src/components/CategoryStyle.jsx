import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Accordion = ({ title, links, titleClassName, linkClassName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className={titleClassName}>{title}</h3>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Accordion Content */}
      {open && (
        <div className="mt-3">
          {/* Thin horizontal line before links */}
          <div className="mb-10 border-t border-gray-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {links.map((link, i) => (
              <Link key={i} to={link.to} className={linkClassName}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CategoryStyle = () => {
  const interestLinks = [
    { label: "Adventure", to: "/asia" },
    { label: "Luxury", to: "/north-america" },
    { label: "Budget", to: "/europe" },
    { label: "Family", to: "/summer" },
  ];

  const styleLinks = [
    { label: "Beach", to: "/central-america" },
    { label: "City", to: "/polar-destinations" },
    { label: "Countryside", to: "/oceania" },
    { label: "Safari", to: "/safari" },
  ];

  const momentLinks = [
    { label: "Honeymoon", to: "/honeymoons" },
    { label: "Birthday", to: "/cruises" },
    { label: "Anniversary", to: "/celebrate" },
    { label: "Graduation", to: "/south-america" },
  ];

  return (
    <div className="mx-4 md:mx-8 lg:mx-16">
      <Accordion
        title="Interest"
        links={interestLinks}
        titleClassName="text-lg font-normal lg:text-[3rem]"
        linkClassName="block lg:text-[1.8rem] font-light"
      />

      <Accordion
        title="Style"
        links={styleLinks}
        titleClassName="text-lg font-normal lg:text-[3rem]"
        linkClassName="block lg:text-[1.8rem] font-light"
      />

      <Accordion
        title="Moment"
        links={momentLinks}
        titleClassName="text-lg font-normal lg:text-[3rem]"
        linkClassName="block lg:text-[1.8rem] font-light"
      />
    </div>
  );
};

export default CategoryStyle;
