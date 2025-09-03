/* eslint-disable no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiAlertTriangle, FiLoader } from "react-icons/fi";

const steps = [
  { label: "Where are you currently?", name: "from" },
  { label: "Where do you want to go?", name: "to" },
  { label: "What is your full name?", name: "name" },
  { label: "What is your email?", name: "email" },
  { label: "What is your phone / WhatsApp?", name: "phone" },
  { label: "What dates are you planning?", name: "dates" },
  { label: "How many travelers?", name: "travelers" },
  { label: "Any special requests?", name: "requests" },
];

export default function BookingForm() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [steps[step].name]: e.target.value });
    if (e.target.value.trim() !== "") {
      setError(false); // remove error once user types
    }
  };

  const validateField = () => {
    const currentField = steps[step].name;
    const value = formData[currentField];

    if (!value || value.trim() === "") {
      return false;
    }

    if (currentField === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }

    if (currentField === "phone") {
      const phoneRegex = /^\+?[0-9]{7,15}$/;
      return phoneRegex.test(value);
    }

    return true;
  };

  const nextStep = () => {
    if (!validateField()) {
      setError(true);
      return;
    }

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    setLoading(true);

    try {
      await fetch("https://bb-flying-backend.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Simulate 9s delay before showing success
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 9000);
    } catch (err) {
      console.error("Error sending email:", err);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStarted(false);
    setStep(0);
    setFormData({});
    setSubmitted(false);
    setError(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen m-5 border">
      {/* Left Side */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-[#fdfbf7] h-screen">
        <div className="max-w-md w-full text-center md:text-left">
          {!started ? (
            // Initial state
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Plan Your Perfect Trip
              </h1>
              <p className="mb-6 text-gray-600 text-base md:text-lg">
                Answer a few quick questions and we’ll help create the perfect
                travel experience for you.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-lg md:text-xl"
              >
                Get Started
              </button>
            </div>
          ) : loading ? (
            // Loading state
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiLoader className="animate-spin text-5xl text-black mb-4" />
              <p className="text-lg text-gray-600">
                Submitting your request...
              </p>
            </div>
          ) : submitted ? (
            // Success state
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Booking Request Sent 🎉
              </h2>
              <p className="mb-2 text-lg">Thank you, {formData.name}!</p>
              <p className="mb-4 text-base md:text-lg">
                We’ll contact you shortly at <strong>{formData.email}</strong>{" "}
                or <strong>{formData.phone}</strong>.
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Your trip from <strong>{formData.from}</strong> to{" "}
                <strong>{formData.to}</strong> is being reviewed.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-lg md:text-xl"
              >
                Done
              </button>
            </div>
          ) : (
            // Form state
            <div>
              <p className="text-sm mb-2">
                Step {step + 1} of {steps.length}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="flex items-center text-lg md:text-xl font-medium mb-2">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="mr-2 text-gray-500 hover:text-black"
                      >
                        <FiArrowLeft size={22} />
                      </button>
                    )}
                    {steps[step].label}
                  </label>

                  {steps[step].name === "requests" ? (
                    <textarea
                      className="w-full border-b p-3 md:p-4 text-base md:text-lg focus:outline-none bg-transparent"
                      placeholder="Type your answer here..."
                      value={formData[steps[step].name] || ""}
                      onChange={handleChange}
                      required
                    />
                  ) : steps[step].name === "dates" ? (
                    <input
                      type="date"
                      className="w-full border-b p-3 md:p-4 text-base md:text-lg focus:outline-none bg-transparent"
                      value={formData[steps[step].name] || ""}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <input
                      type="text"
                      className="w-full border-b p-3 md:p-4 text-base md:text-lg focus:outline-none bg-transparent"
                      placeholder="Type your answer here..."
                      value={formData[steps[step].name] || ""}
                      onChange={handleChange}
                      required
                    />
                  )}

                  {error ? (
                    <div className="mt-6 flex items-center justify-center bg-red-100 text-red-700 py-2 px-4 rounded">
                      <FiAlertTriangle className="mr-2" />
                      Please fill this in correctly
                    </div>
                  ) : (
                    <button
                      onClick={nextStep}
                      className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-lg md:text-xl"
                    >
                      {step < steps.length - 1 ? "Continue" : "Finish"}
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 h-64 md:h-full">
        <img
          src="/designtrip.gif"
          alt="Travel"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
