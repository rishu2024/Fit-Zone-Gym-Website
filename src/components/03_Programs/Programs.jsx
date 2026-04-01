function Programs() {
  const programs = [
    {
      title: "Strength Training",
      desc: "Build muscle and increase power with expert guidance.",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      title: "Cardio Fitness",
      desc: "Boost stamina and burn calories with high-energy workouts.",
      img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    },
    {
      title: "Yoga & Flexibility",
      desc: "Improve flexibility, balance, and mental wellness.",
      img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
    },
    {
      title: "Personal Training",
      desc: "Get customized workout plans from professional trainers.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-red-500">Programs</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Choose your fitness journey with our expert-designed programs
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((item, index) => (
            <div
              key={index}
              className="relative h-72 rounded-xl overflow-hidden group transition duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${item.img}?auto=format&fit=crop&w=800&q=80)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 transition duration-300 group-hover:bg-black/50" />

              {/* Content */}
              <div className="absolute bottom-0 p-5 z-10">

                {/* Title */}
                <h3 className="text-xl font-semibold group-hover:text-red-400 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  {item.desc}
                </p>

                {/* 🔥 Underline (same system as navbar) */}
                <span className="block h-[2px] bg-red-500 w-0 group-hover:w-12 transition-all duration-300 mt-2"></span>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;