import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-[#f8f5f0] text-[#2b2b2b] font-chiswick px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-chiswick sm:text-4xl md:text-5xl  font-normal text-center mb-10">
          Terms of Use
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-6 text-center">
          Last updated: August 1, 2025
        </p>

        {/* Intro */}
        <section className="space-y-4 mb-10">
          <p>
            Welcome to BB Travel (“BB Travel,” “we,” “us,” or “our”). These
            Terms of Use (“Terms”) govern your use of our website, mobile
            applications, and other services (collectively, the “Services”).
            Please read these Terms carefully before using our Services.
          </p>
          <p>
            By using our Services, you agree to be bound by these Terms. If you
            do not agree to these Terms, do not use our Services.
          </p>
        </section>

        {/* Eligibility */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Eligibility</h2>
          <p>
            You must be at least 18 years old to use our Services. By using our
            Services, you represent and warrant that you meet this requirement.
          </p>
        </section>

        {/* Account */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Account Registration</h2>
          <p>
            To access certain features, you may need to create an account. You
            agree to provide accurate, complete, and current information and to
            keep it updated. You are responsible for maintaining the
            confidentiality of your account and password.
          </p>
        </section>

        {/* Acceptable Use */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Acceptable Use</h2>
          <p>You agree not to use the Services to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Engage in unlawful or fraudulent activities</li>
            <li>Harass, threaten, or harm others</li>
            <li>Interfere with or disrupt the Services</li>
            <li>Upload harmful or malicious content</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p>
            All content on the Services, including text, graphics, logos, and
            images, is the property of BB Travel or its licensors and is
            protected by intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our permission.
          </p>
        </section>

        {/* Termination */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time,
            without notice, if we believe you have violated these Terms or
            engaged in inappropriate conduct.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p>
            BB Travel is not liable for any indirect, incidental, special, or
            consequential damages arising from your use of the Services, even if
            we have been advised of the possibility of such damages.
          </p>
        </section>

        {/* Governing Law */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the jurisdiction in which BB Travel operates, without regard
            to its conflict of law provisions.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:{" "}
            <a
              href="mailto:terms@bbtravel.com"
              className="text-blue-600 underline"
            >
              terms@bbtravel.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
