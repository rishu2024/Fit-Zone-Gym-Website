import { useEffect, useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);

  const heroBg =
    "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Heading */}
        <h1
          className={`text-4xl md:text-6xl font-bold leading-tight transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Transform Your Body <br />
          <span className="text-red-500">Build Your Strength</span>
        </h1>

        {/* Paragraph */}
        <p
          className={`mt-4 text-gray-300 transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Join FitZone Gym and take your fitness journey to the next level with
          expert trainers, modern equipment, and powerful programs.
        </p>

        {/* Buttons */}
        <div
          className={`mt-8 flex justify-center gap-6 flex-wrap transition-all duration-1000 delay-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          {/* 🔥 Primary Button */}
          <button className="relative px-7 py-3 font-semibold text-white bg-red-600 rounded-md overflow-hidden transition duration-300 hover:bg-red-700 hover:scale-105">
            <span className="relative z-10">Join Now</span>

            <span className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-20 transition duration-300"></span>
          </button>

          {/* 🔥 Updated Free Trial Button */}
          <button className="relative px-7 py-3 font-semibold text-white rounded-md border border-gray-500 backdrop-blur-sm overflow-hidden transition duration-300 hover:border-red-500 hover:scale-105">

            <span className="relative z-10">Free Trial</span>

            {/* hover fill effect */}
            <span className="absolute inset-0 bg-red-600 opacity-0 hover:opacity-20 transition duration-300"></span>

          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;