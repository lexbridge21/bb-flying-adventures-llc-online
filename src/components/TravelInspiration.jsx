import { Link } from "react-router-dom";

export default function TravelInspiration() {
  const blogs = [
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
  ];

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/the-journal#${blog.id}`}
              className="overflow-hidden transition flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="flex-1 flex flex-col mt-3">
                <p className="text-gray-500 text-sm mb-2 text-[20px]">
                  {blog.date} • Travel Inspiration
                </p>
                <h3 className="text-lg font-chiswick font-[400] text-black mb-4 text-[26px]">
                  {blog.title}
                </h3>
                <div className="flex items-center mt-auto">
                  <img
                    src="/BBLogo.svg"
                    alt="BB LLC Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-2 text-left font-chiswick">
                    <p className="text-xs italic">Curated by</p>
                    <p className="text-sm font-semibold font-blanco">BB LLC</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center">
          <Link
            to="/the-journal"
            className="mt-10 px-6 py-3 bg-white border border-black hover:bg-black hover:text-white transition"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
