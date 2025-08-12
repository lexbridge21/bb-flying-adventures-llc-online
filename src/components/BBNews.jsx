export default function BBNews() {
  const news = [
    {
      date: "JUL 13, 2025",
      title: "Level up your vacation with upgrades to classic destinations",
      img: "/good-morning.png",
    },
    {
      date: "JUN 14, 2025",
      title: "How to travel well, with Henley Vazquez",
      img: "/eat-breakfast.png",
    },
    {
      date: "JUN 11, 2025",
      title:
        "Luxury Farmstays Are the Italy Travel Trend Everyone Is Booking for Summer 2025",
      img: "/who-what-wear.png",
    },
    {
      date: "JUN 11, 2025",
      title:
        "Skip the Instagram Hotspots—These 8 Alt European Destinations Are Where You’ll Find the In-the-Know Crowd",
      img: "/who-what-wear.png",
    },
    {
      date: "MAY 29, 2025",
      title: "Web Summit Vancouver | May 2025",
      img: "/websubmit.png",
    },
    {
      date: "MAY 28, 2025",
      title: "What’s Booking Well for BB Travel This Summer?",
      img: "/inside-travel.png",
    },
    {
      date: "MAY 27, 2025",
      title: "Summer Travel Trends to Know for 2025",
      img: "/travelage-west.png",
    },
    {
      date: "MAY 25, 2025",
      title: "Host Agency BB Travel Expands Internationally to Mexico",
      img: "/inside-travel.png",
    },
    {
      date: "MAY 22, 2025",
      title: "Host agency BB Travel expands into Mexico",
      img: "/travel-weekly.png",
    },
  ];

  return (
    <section className="w-full px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-4xl font-semibold lg:text-6xl">
          BB in the News
        </h2>
        <p className="text-gray-700 font-blanco lg:text-xl mt-2">
          Browse articles of BB in the news. <br />
          For any media inquiries, please contact{" "}
          <a href="mailto:press@bbtravel.com" className="underline">
            press@bbtravel.com
          </a>
          .
        </p>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-[80vh] border hover:shadow-md transition"
          >
            {/* Image */}
            <div className="flex justify-center align-middle items-center p-4">
              <img
                src={item.img}
                alt={item.title}
                className="h-30 mt-7 object-contain"
              />
            </div>

            {/* Text Part */}
            <div className="bg-[#e7ddd2] h-full p-4 flex flex-col justify-center mt-15">
              <p className="text-x1 text-gray-600 lg:text-xl mb-2">
                {item.date}
              </p>
              <h3 className="font-medium text-base lg:text-2xl leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
