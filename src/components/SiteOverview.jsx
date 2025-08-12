import React from "react";

const SiteOverview = () => {
  return (
    <div className="bg-[#f8f5f0] text-[#2b2b2b] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-center mb-10">
          Site Overview
        </h1>

        {/* Intro */}
        <section className="space-y-4 mb-10">
          <p>
            Welcome to BB Travel — your trusted companion for curated travel
            experiences, insider tips, and effortless booking. Our mission is to
            connect curious travelers with destinations, experiences, and
            accommodations that go beyond the ordinary.
          </p>
          <p>
            This Site Overview provides a high-level summary of what BB Travel
            offers, how to navigate our website, and where to find essential
            information.
          </p>
        </section>

        {/* Main Sections */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">
            Main Sections of Our Website
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Destinations</strong> — Discover in-depth travel guides,
              recommendations, and seasonal highlights for destinations around
              the world.
            </li>
            <li>
              <strong>Experiences</strong> — Browse curated tours, activities,
              and exclusive packages.
            </li>
            <li>
              <strong>Advisors</strong> — Learn more about our travel experts
              and how they can personalize your trip.
            </li>
            <li>
              <strong>Resources</strong> — Access travel tips, packing lists,
              and insider advice to make your trip seamless.
            </li>
          </ul>
        </section>

        {/* How to Use */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">How to Use the Site</h2>
          <p>
            Navigation is designed to be intuitive, whether you’re browsing on
            desktop, tablet, or mobile. Use the main menu to explore our core
            sections or the search function to quickly find specific
            information.
          </p>
          <p>
            Each travel guide includes an overview, highlights, and booking
            options. Our booking forms are secure, and you’ll receive
            confirmation details via email after completing a reservation.
          </p>
        </section>

        {/* Membership / Newsletter */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <p>
            Join our free newsletter to receive updates on new destinations,
            limited-time offers, and travel inspiration directly in your inbox.
          </p>
        </section>

        {/* Policies */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Policies & Legal</h2>
          <p>
            For information on how we handle your data, please see our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            . By using this site, you agree to our{" "}
            <a href="/terms" className="text-blue-600 underline">
              Terms of Use
            </a>
            .
          </p>
        </section>

        {/* Closing */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Our Commitment</h2>
          <p>
            At BB Travel, we are committed to making travel planning simple,
            enjoyable, and inspiring. Our website is built for explorers who
            value authentic experiences, personal touches, and reliable
            guidance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SiteOverview;
