function Features() {
  const features = [
    {
      title: "Certified Trainers",
      desc: "Our trainers ensure correct form, prevent injuries, and guide you step-by-step throughout your fitness journey.",
    },
    {
      title: "Personalized Workout Plans",
      desc: "Every individual gets a plan tailored to their body type, goals, and progress level.",
    },
    {
      title: "Modern Equipment",
      desc: "We provide high-quality machines and tools to support all types of workouts effectively.",
    },
    {
      title: "Flexible Training Hours",
      desc: "Open gym hours allow you to train at your convenience without disrupting your schedule.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose <span className="text-red-500">FitZone Gym</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            We focus on building strength, discipline, and consistency — not just workouts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">

          {features.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 
              transition duration-300 hover:scale-105 hover:border-red-500/40 hover:bg-gray-900 group"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold group-hover:text-red-400 transition">
                {item.title}
              </h3>

              {/* Underline */}
              <span className="block h-[2px] bg-red-500 w-0 group-hover:w-12 transition-all duration-300 mt-2"></span>

              {/* Description */}
              <p className="text-sm text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;