"use client";

import { useState } from "react";
import { Briefcase, Users, Globe, Upload, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function JobApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    customPosition: "",
    about: "",
  });

  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const positions = [
    "Customer Support",
    "Virtual Assistant",
    "Data Entry",
    "Chat Moderator",
    "Sales Representative",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePositionChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      position: value,
      customPosition: value === "Others" ? prev.customPosition : "",
    }));

    if (errors.position) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.position;
        return newErrors;
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      if (
        ![
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type)
      ) {
        alert("Only PDF, DOC, or DOCX files are allowed");
        return;
      }
      setResume(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.position) newErrors.position = "Please select a position";
    if (formData.position === "Others" && !formData.customPosition.trim()) {
      newErrors.customPosition = "Please specify your position";
    }
    if (!formData.about.trim())
      newErrors.about = "Please tell us about yourself";
    if (!resume) newErrors.resume = "Please upload your resume";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position:
          formData.position === "Others"
            ? formData.customPosition
            : formData.position,
        about: formData.about,
        resume_name: resume ? resume.name : "No resume uploaded",
      };

      // ←←← REPLACE THESE WITH YOUR ACTUAL EMAILJS VALUES ←←←
      await emailjs.send(
        "service_2js5tk5", // e.g. service_abc123
        "template_22xnsu8", // e.g. template_xyz789
        templateParams,
        "i2ZRhVliyv6ti9tx-", // e.g. user_123456789
      );

      setSubmitted(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          customPosition: "",
          about: "",
        });
        setResume(null);
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.phone.trim() &&
    formData.position &&
    (formData.position !== "Others" || formData.customPosition.trim()) &&
    formData.about.trim() &&
    resume !== null;

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-lg">
            <Briefcase size={30} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Join Our Team
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            We are always looking for passionate and hardworking people to join
            our growing team. Fill out the application below and we'll contact
            qualified candidates.
          </p>
        </div>

        {/* Features */}
        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Users className="mb-4 text-black" size={35} />
            <h3 className="mb-2 text-lg font-semibold">Friendly Team</h3>
            <p className="text-gray-600">
              Work with professionals who value teamwork and collaboration.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Globe className="mb-4 text-black" size={35} />
            <h3 className="mb-2 text-lg font-semibold">Remote Opportunities</h3>
            <p className="text-gray-600">
              Work remotely from eligible locations with flexible schedules.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Briefcase className="mb-4 text-black" size={35} />
            <h3 className="mb-2 text-lg font-semibold">Career Growth</h3>
            <p className="text-gray-600">
              Build your skills through learning opportunities and mentorship.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Apply Now</h2>

          {submitted ? (
            <div className="rounded-2xl bg-green-50 p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </div>
              <h3 className="text-2xl font-semibold text-green-800">
                Application Submitted Successfully!
              </h3>
              <p className="mt-3 text-green-700">
                Thank you! Our team will review your application and get back to
                you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handlePositionChange}
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  >
                    <option value="">Select Position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                    <option value="Others">Others</option>
                  </select>
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.position}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-amber-600">
                    Don&apos;t see your position? Select{" "}
                    <strong>&quot;Others&quot;</strong> and tell us what
                    you&apos;re looking for.
                  </p>
                </div>
              </div>

              {formData.position === "Others" && (
                <div>
                  <input
                    type="text"
                    name="customPosition"
                    value={formData.customPosition}
                    onChange={handleChange}
                    placeholder="Enter the position you're interested in"
                    className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                  />
                  {errors.customPosition && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.customPosition}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs text-gray-500">
                    We&apos;ll review your request and let you know if this
                    position is available.
                  </p>
                </div>
              )}

              <div>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about yourself, your experience, and why you want to join our team..."
                  className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
                ></textarea>
                {errors.about && (
                  <p className="mt-1 text-sm text-red-500">{errors.about}</p>
                )}
              </div>

              {/* Resume Upload */}
              <div>
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 transition hover:border-blue-600">
                  <Upload className="mb-4 text-blue-600" size={40} />
                  <h3 className="font-semibold">Upload Your CV / Resume</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    PDF, DOC or DOCX (Maximum 5MB)
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {resume && (
                    <div className="mt-5 rounded-lg bg-green-100 px-4 py-2 text-green-700">
                      ✓ {resume.name}
                    </div>
                  )}
                </label>
                {errors.resume && (
                  <p className="mt-2 text-center text-sm text-red-500">
                    {errors.resume}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={22} />
                    Submitting Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                Our recruitment team reviews every application. Qualified
                applicants will be contacted within 3–5 business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
