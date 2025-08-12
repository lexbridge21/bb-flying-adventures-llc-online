import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const allBlogs = [
  {
    id: "blog1",
    date: "Jul 25, 2025",
    title: "Lisbon: Hotels under $500",
    image: "/lisbon.jpg",
  },
  {
    id: "blog2",
    date: "Jun 10, 2025",
    title: "10 Underrated European Cities You Can't Miss",
    image: "/underrated.jpg",
  },
  {
    id: "blog3",
    date: "Sep 5, 2025",
    title: "European Beach Clubs: Where to Lunch This Summer",
    image: "/lunch.jpg",
  },
  {
    id: "blog4",
    date: "Feb 5, 2025",
    title: "How to Become a Cruise Travel Agent in 2025",
    image: "/become-cruise.jpg",
  },
  {
    id: "blog5",
    date: "Dec 15, 2024",
    title:
      "How Do Travel Agents Get Paid? (And How BB Travel Does it Differently)",
    image: "/paid.jpg",
  },
  {
    id: "blog6",
    date: "Jan 10, 2024",
    title: "Meet Sidekick: BB’s AI Tool",
    image: "/sidekick.jpg",
  },
  {
    id: "blog7",
    date: "May 12, 2024",
    title: "BB’s Curriculum: An Overview & What to Expect",
    image: "/curiculum.jpg",
  },
  {
    id: "blog8",
    date: "Apr 19, 2024",
    title: "How to Get Clients as a Travel Agent: BB’s Top 3 Tips",
    image: "/clients.jpg",
  },
];

export default function TheJournal() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const blogId = location.hash.replace("#", "");
      const element = document.getElementById(blogId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 font-chiswick bg-[#f8f5f1]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-25">
          <h1 className="text-4xl sm:text-5xl text-center lg:text-7xl font-normal mb-12">
            The Journal
          </h1>
          <p className="text-center lg:text-xl">
            Your destination for travel inspiration and industry news.
          </p>
        </div>

        <div className="space-y-12">
          {allBlogs.map((blog) => (
            <div
              key={blog.id}
              id={blog.id}
              className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 items-start w-full"
            >
              {/* IMAGE - aligned right on large screens */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full lg:w-[300px] h-48 object-cover shrink-0"
              />

              {/* TEXT - aligned left */}
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-gray-600 lg:text-xl mb-2 leading-tight">
                  {blog.date} • Travel Advisor Resources
                </p>

                <h3 className="text-xl sm:text-2xl lg:text-3xl md:text-[22px] font-[400] mb-4 leading-snug">
                  {blog.title}
                </h3>

                {/* Curated by BB */}
                <div className="flex items-center mt-auto">
                  <img
                    src="/BBLogo.svg"
                    alt="BB LLC Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3 text-left">
                    <p className="text-xs font-blanco lg:text-sm italic text-gray-500">
                      The Modern Travel Agency
                    </p>
                    <p className="text-sm font-semibold font-blanco">
                      BB Travel LLC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
