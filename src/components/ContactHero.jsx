import React from "react";

const ContactHero = () => {
  return (
    <div className="bg-[#fefaf5] py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-12">
        Get in touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
        {/* PRESS */}
        <div className="flex flex-col items-center">
          <img
            src="/press-icon.png" // update path to match your actual file
            alt="Press icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-base font-semibold tracking-wide uppercase mb-2">
            Press
          </h3>
          <p className="max-w-xs text-sm">
            For all press and interview requests, please email{" "}
            <a
              href="mailto:press@foratravel.com"
              className="underline font-medium"
            >
              press@bbtravel.com
            </a>
            .
          </p>
        </div>

        {/* PARTNERS */}
        <div className="flex flex-col items-center">
          <img
            src="/partners-icon.png" // update path to match your actual file
            alt="Partners icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-base font-semibold tracking-wide uppercase mb-2">
            Partners
          </h3>
          <p className="max-w-xs text-sm">
            If you're a supplier interested in partnering with us, please visit
            our{" "}
            <a href="/partners" className="underline font-medium">
              partners page
            </a>
            .
          </p>
        </div>

        {/* FEEDBACK */}
        <div className="flex flex-col items-center">
          <img
            src="/feedback-icon.png" // update path to match your actual file
            alt="Feedback icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-base font-semibold tracking-wide uppercase mb-2">
            Feedback
          </h3>
          <p className="max-w-xs text-sm">
            We'd love to hear your thoughts. Please share any and all feedback{" "}
            <a href="/faq" className="underline font-medium">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
