import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f8f5f0] text-[#2b2b2b] font-chiswick px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-chiswick font-normal text-center mb-10">
          Privacy Policy
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-6 text-center">
          Last updated: August 1, 2025
        </p>

        {/* Introduction */}
        <section className="space-y-4 mb-10">
          <p>
            BB Travel (“BB Travel,” “we,” “us,” or “our”) respects your privacy
            and is committed to protecting it through this Privacy Policy. This
            Privacy Policy explains how we collect, use, and share information
            about you when you use our website, mobile application, and other
            online services (collectively, the “Services”).
          </p>
          <p>
            By accessing or using the Services, you agree to this Privacy
            Policy. If you do not agree with our policies and practices, your
            choice is not to use our Services.
          </p>
        </section>

        {/* What we collect */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">What Information We Collect</h2>
          <p>We may collect the following information from you:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Personal information such as your name, email address, and phone
              number
            </li>
            <li>Payment details you provide when making purchases</li>
            <li>
              Information you provide when filling out forms on our Services
            </li>
            <li>
              Information collected automatically, such as IP address and
              browser type
            </li>
          </ul>
        </section>

        {/* How we use */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p>We use information we collect for purposes including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Providing and improving our Services</li>
            <li>Processing your transactions</li>
            <li>Sending you newsletters, offers, and promotional materials</li>
            <li>Responding to customer inquiries and support requests</li>
          </ul>
        </section>

        {/* Sharing */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">
            How We Share Your Information
          </h2>
          <p>We do not sell your personal information. We may share it:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>With service providers that help us operate our Services</li>
            <li>To comply with legal obligations</li>
            <li>In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        {/* Security */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet or electronic storage is completely
            secure.
          </p>
        </section>

        {/* Your Rights */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p>
            Depending on where you live, you may have rights regarding your
            personal information, such as accessing, correcting, or deleting
            your data.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:{" "}
            <a
              href="mailto:privacy@bbtravel.com"
              className="text-blue-600 underline"
            >
              privacy@bbtravel.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
