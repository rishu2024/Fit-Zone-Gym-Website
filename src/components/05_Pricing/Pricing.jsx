function Pricing() {
  const plans = [
    {
      name: "Monthly",
      price: "₹999",
      duration: "1 Month",
      features: [
        "Gym Access",
        "Locker Facility",
        "Free WiFi",
        "1 Personal Training",
      ],
    },
    {
      name: "3 Months",
      price: "₹2499",
      duration: "3 Months",
      features: [
        "Gym Access",
        "Locker Facility",
        "Free WiFi",
        "3 Personal Training",
      ],
      popular: true,
    },
    {
      name: "6 Months",
      price: "₹4499",
      duration: "6 Months",
      features: [
        "Gym Access",
        "Locker Facility",
        "Free WiFi",
        "6 Personal Training",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Membership <span className="text-red-500">Plans</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Choose a plan that fits your fitness journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 
              transition duration-300 hover:scale-105 hover:border-red-500/40 group ${
                plan.popular ? "border-red-500/40" : ""
              }`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <span className="absolute top-4 right-4 text-xs bg-red-600 px-2 py-1 rounded">
                  Popular
                </span>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-semibold group-hover:text-red-400 transition">
                {plan.name}
              </h3>

              {/* Underline */}
              <span className="block h-[2px] bg-red-500 w-0 group-hover:w-12 transition-all duration-300 mt-2"></span>

              {/* Price */}
              <p className="text-3xl font-bold mt-4">{plan.price}</p>
              <p className="text-gray-400 mb-4">{plan.duration}</p>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-300">
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-6 w-full px-6 py-2 bg-red-600 rounded-md transition duration-300 hover:bg-red-700 hover:scale-105">
                Join Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;