function Trainers() {
  const trainers = [
    {
      name: "Rahul Verma",
      role: "Strength Coach",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    },
    {
      name: "Amit Singh",
      role: "Cardio Trainer",
      img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    },
    {
      name: "Neha Sharma",
      role: "Yoga Instructor",
      img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
    },
  ];

  return (
    <section
      id="trainers"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Meet Our <span className="text-red-500">Trainers</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Learn from certified professionals who guide your fitness journey
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {trainers.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 
              transition duration-300 hover:scale-105 hover:border-red-500/40 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={`${t.img}?auto=format&fit=crop&w=500&q=80`}
                  alt={t.name}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Name */}
                <h3 className="text-lg font-semibold group-hover:text-red-400 transition">
                  {t.name}
                </h3>

                {/* Underline */}
                <span className="block h-[2px] bg-red-500 w-0 group-hover:w-12 transition-all duration-300 mt-2"></span>

                {/* Role */}
                <p className="text-sm text-gray-400 mt-2">
                  {t.role}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Trainers;