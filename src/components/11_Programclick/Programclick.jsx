import React, { useEffect, useState } from "react";

function Programclick({ program, isOpen, setIsOpen }) {
  const [show, setShow] = useState(false);

  // animation trigger + scroll lock
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setShow(false);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-50 flex justify-center items-center px-4 transition-all duration-500 ease-out
      ${
        show
          ? "bg-black/80 backdrop-blur-md opacity-100"
          : "bg-black/0 opacity-0"
      }`}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out
        ${
          show
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">

          {/* Image Zoom */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out
            ${show ? "scale-100" : "scale-110"}`}
            style={{
              backgroundImage: `url(${program.img}?auto=format&fit=crop&w=1200&q=80)`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6">
            <h2
              className={`text-2xl font-bold text-white transition-all duration-500 delay-200
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {program.title}
            </h2>
          </div>

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-xl hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="bg-zinc-900/95 backdrop-blur-xl p-6">

          {/* Description */}
          <p
            className={`text-gray-400 mt-2 transition-all duration-500 delay-300
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {program.desc}
          </p>

          {/* Benefits */}
          <div
            className={`mt-5 transition-all duration-500 delay-400
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-lg font-semibold text-red-400">
              Benefits
            </h3>

            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              {program.benefits?.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>

          {/* Why */}
          <div
            className={`mt-5 transition-all duration-500 delay-500
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-lg font-semibold text-red-400">
              Why Join This Program?
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              {program.why}
            </p>
          </div>

          {/* CTA */}
          <div
            className={`mt-6 flex justify-end transition-all duration-500 delay-700
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full border border-zinc-600 text-white hover:border-red-500 hover:text-red-500 transition"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Programclick;