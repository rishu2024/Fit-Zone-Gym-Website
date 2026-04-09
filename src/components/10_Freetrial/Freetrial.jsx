import React, { useState } from "react";
import Toast from "../09_Toast/Toast";
import { FaUser, FaPhone } from "react-icons/fa";

function Freetrial({ isOpen, setIsOpen }) {
  const [showToast, setShowToast] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    day: "",
    time: "",
    goal: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // future backend

    setShowToast(true);

    setTimeout(() => setIsOpen(false), 2000);
    setTimeout(() => setShowToast(false), 3000);

    // reset form
    setForm({
      name: "",
      phone: "",
      day: "",
      time: "",
      goal: "",
    });
  };

  return (
    <>
      {/* Toast */}
      <Toast
        show={showToast}
        type="success"
        message="Free trial booked successfully"
        onClose={() => setShowToast(false)}
      />

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
        onClick={() => setIsOpen(false)}
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-[90%] max-w-md shadow-2xl relative"
        >
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
          >
            ✕
          </button>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-2">
            <span className="text-red-500">7 Days</span> Free Trial
          </h2>

          <p className="text-gray-400 text-center mb-4 text-sm">
            Start your fitness journey today 🚀
          </p>

          {/* Tip */}
          <p className="text-xs text-gray-500 text-center mb-6">
            Choose your preferred time & goal for better training experience
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/50 border border-zinc-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-white"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/50 border border-zinc-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-white"
              />
            </div>

            {/* Day */}
            <select
              name="day"
              value={form.day}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-zinc-700 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
            >
              <option value="">Select Day</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>

            {/* Time Slot */}
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-zinc-700 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
            >
              <option value="">Select Time Slot</option>
              <option>6:00 AM - 8:00 AM</option>
              <option>8:00 AM - 10:00 AM</option>
              <option>5:00 PM - 7:00 PM</option>
              <option>7:00 PM - 9:00 PM</option>
            </select>

            {/* Goal */}
            <select
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-zinc-700 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
            >
              <option value="">Your Goal</option>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>General Fitness</option>
            </select>

            {/* Button */}
            <button
              type="submit"
              className="relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white mt-3 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 blur-xl transition"></span>
              <span className="relative z-10">
                Book Free Trial →
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Freetrial;