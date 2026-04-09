import { useEffect, useState } from "react";
import Joinclick from "../08_Joinclick/Joinclick";
import Freetrial from "../10_Freetrial/Freetrial";

function Hero() {
  const [show, setShow] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);

  const heroBg =
    "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-6 md:px-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        
        <h1
          className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Transform Your Body <br />
          <span className="text-red-500">Build Your Strength</span>
        </h1>

        <p
          className={`mt-4 text-gray-200 transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Join <span className="text-white font-medium">FitZone Gym</span> and take your 
          fitness journey to the next level with 
          <span className="text-white font-medium"> expert trainers</span>, 
          <span className="text-white font-medium"> modern equipment</span>, and 
          <span className="text-white font-medium"> powerful programs</span>.
        </p>

        {/* Buttons */}
        <div
          className={`mt-8 flex justify-center gap-4 flex-wrap transition-all duration-1000 delay-500 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Join Now */}
          <button
            onClick={() => setClickOpen(true)}
            className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-white transition duration-300 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:scale-110 transition duration-300"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500 blur-md transition duration-300"></span>
            <span className="relative z-10">Join Now →</span>
          </button>

          {/* Free Trial */}
          <button
            onClick={() => setTrialOpen(true)}
            className="border border-zinc-700 px-6 py-2 rounded-full text-white hover:border-red-500 hover:text-red-500 transition duration-300"
          >
            Free Trial
          </button>
        </div>
      </div>

      {/* Modals */}
      <Joinclick isOpen={clickOpen} setIsOpen={setClickOpen} />
      <Freetrial isOpen={trialOpen} setIsOpen={setTrialOpen} />
    </section>
  );
}

export default Hero;