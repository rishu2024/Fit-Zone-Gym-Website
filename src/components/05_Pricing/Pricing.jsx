import { useState } from "react";
import Joinclick from "../08_Joinclick/Joinclick";

function Pricing({ selectedPlan }) {
  const [duration, setDuration] = useState("monthly");
  const [joinOpen, setJoinOpen] = useState(false);

  const plans = {
    monthly: [
      { name: "Basic", price: 799 },
      { name: "Standard", price: 1299 },
      { name: "Premium", price: 1799 },
    ],
    quarterly: [
      { name: "Basic", price: 1999 },
      { name: "Standard", price: 3499 },
      { name: "Premium", price: 4999 },
    ],
    halfyearly: [
      { name: "Basic", price: 3499 },
      { name: "Standard", price: 5999 },
      { name: "Premium", price: 8499 },
    ],
    yearly: [
      { name: "Basic", price: 5999 },
      { name: "Standard", price: 9999 },
      { name: "Premium", price: 13999 },
    ],
  };

  const features = {
    Basic: [
      "Strength Training Access",
      "Gym Equipment Access",
      "Locker Facility",
    ],
    Standard: [
      "Strength Training",
      "Cardio Fitness",
      "Trainer Guidance",
      "Diet Plan",
    ],
    Premium: [
      "Strength Training",
      "Cardio Fitness",
      "Yoga & Flexibility",
      "Personal Trainer",
      "Priority Support",
    ],
  };

  const durationLabel = {
    monthly: "1 Month",
    quarterly: "3 Months",
    halfyearly: "6 Months",
    yearly: "12 Months",
  };

  const savings = {
    monthly: "",
    quarterly: "Save 10%",
    halfyearly: "Save 25%",
    yearly: "Save 40%",
  };

  const currentPlans = plans[duration];

  return (
    <>
      <section
        id="pricing"
        className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold">
              Flexible <span className="text-red-500">Pricing</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Choose the plan that matches your fitness level
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-14">
            <div className="bg-white/5 border border-white/10 rounded-full p-1 flex gap-2">
              {Object.keys(plans).map((key) => (
                <button
                  key={key}
                  onClick={() => setDuration(key)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    duration === key
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {durationLabel[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {currentPlans.map((plan, index) => {
              const months =
                duration === "monthly"
                  ? 1
                  : duration === "quarterly"
                  ? 3
                  : duration === "halfyearly"
                  ? 6
                  : 12;

              const monthlyPrice = Math.round(plan.price / months);
              const isSelected = plan.name === selectedPlan;

              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl border p-8 flex flex-col h-full transition-all duration-300
                  ${
                    isSelected
                      ? "bg-white/15 border-red-500 scale-[1.06] shadow-[0_0_25px_rgba(255,0,0,0.3)]"
                      : "bg-white/5 border-white/10 hover:border-red-500/40 hover:bg-white/10"
                  }`}
                >
                  {/* Badge */}
                  {isSelected && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-xs px-4 py-1 rounded-full">
                      Recommended 🔥
                    </span>
                  )}

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-center">
                      {plan.name}
                    </h3>

                    <div className="text-center mt-4">
                      <span className="text-3xl font-bold">
                        ₹{plan.price}
                      </span>
                      <p className="text-gray-400 text-sm">
                        {durationLabel[duration]}
                      </p>
                    </div>

                    <p className="text-center text-sm text-gray-400 mt-2">
                      ₹{monthlyPrice}/month
                    </p>

                    {savings[duration] && (
                      <p className="text-center text-green-400 text-xs mt-1">
                        {savings[duration]}
                      </p>
                    )}

                    <div className="my-6 h-[1px] bg-white/10"></div>

                    <ul className="space-y-3 text-sm text-gray-300">
                      {features[plan.name].map((item, i) => (
                        <li key={i}>✔ {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <button
                      onClick={() => setJoinOpen(true)}
                      className="w-full relative overflow-hidden py-3 rounded-full font-semibold text-white group/btn"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"></span>
                      <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-white/20 blur-lg transition"></span>
                      <span className="relative z-10">
                        Get Started →
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Joinclick isOpen={joinOpen} setIsOpen={setJoinOpen} />
    </>
  );
}

export default Pricing;