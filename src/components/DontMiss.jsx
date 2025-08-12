import React, { useState } from "react";
import Notiflix from "notiflix";

const DontMiss = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      Notiflix.Notify.failure("Please enter a valid email address");
      return;
    }

    // Show success notification
    Notiflix.Notify.success(
      "You have successfully subscribed to our newsletter!"
    );

    // Optionally reset the input
    setEmail("");
  };

  return (
    <div className="bg-[#e3d9ce] text-center py-16 px-6 sm:px-12 lg:m-[3rem] m-[1rem]">
      <h2 className="font-chiswick text-4xl sm:text-5xl font-normal text-black mb-6">
        Don’t miss a beat
      </h2>
      <p className="font-blanco text-base sm:text-lg md:text-xl text-[#4a4033] max-w-xl mx-auto mb-10">
        Life's too short for tourist traps. Subscribe to our newsletter and
        travel like an insider.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-row items-center justify-center w-full"
      >
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-chiswick w-full px-4 py-1 border border-black outline-none text-base rounded-none"
        />
        <button
          type="submit"
          className="font-chiswick bg-[#7b6a58] text-white font-normal py-1 px-6 transition cursor-pointer duration-300 hover:bg-[#6e5e4d] whitespace-nowrap"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default DontMiss;
