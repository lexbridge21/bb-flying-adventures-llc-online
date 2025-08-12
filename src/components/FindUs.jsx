import { Link } from "react-router-dom";

export default function FindUs() {
  return (
    <section className="px-0 mx-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className=" h-screen p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-4">
            Where to find us
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            <strong>Our New York City office: </strong>
            <p>BB Travel is headquartered in lower Manhattan.</p>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            <strong>Our Toronto office: </strong>
            <p>
              1235 Bay Street, Suite 700 <br />
              Toronto, Ontario <br />
              M5R 3K4
            </p>
          </p>

          <p>Please note that visitors are accepted by appointment only.</p>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            <strong>Our mailing address: </strong>
            <p>
              BB Travel, Inc. <br />
              228 Park Ave South, Suite 53272 <br />
              New York, NY 10003-1502
            </p>
          </p>
          <p>Please use this address for all mail correspondence.</p>
        </div>

        {/* IMAGE */}
        <img
          src="/find-us.png" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-screen object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
