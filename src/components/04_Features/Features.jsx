import {
  FaUserTie,
  FaDumbbell,
  FaAppleAlt,
  FaRobot,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: FaUserTie,
      title: "Expert Trainers",
      desc: "Certified professionals to guide your transformation journey.",
      highlight: true,
    },
    {
      icon: FaDumbbell,
      title: "Modern Equipment",
      desc: "Train with industry-grade machines and latest technology.",
    },
    {
      icon: FaAppleAlt,
      title: "Diet Plans",
      desc: "Customized nutrition plans for faster and better results.",
    },
    {
      icon: FaRobot,
      title: "AI Workout Plan",
      desc: "Smart AI-based suggestions tailored to your fitness goals.",
    },
    {
      icon: FaClock,
      title: "Flexible Timing",
      desc: "Workout anytime with flexible and convenient schedules.",
    },
    {
      icon: FaHeartbeat,
      title: "Personalized Programs",
      desc: "Programs designed specifically for your body and goals.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-red-500">FitZone</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Everything you need to achieve your fitness goals faster & smarter.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ease-out
              ${
                item.highlight
                  ? "bg-white/5 border-red-500/30"
                  : "bg-white/5 border-white/10"
              }
              hover:scale-[1.03] hover:border-red-500/50 hover:bg-white/10`}
            >
              {/* Glow (controlled + subtle) */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-red-500/5 blur-xl transition duration-300"></div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-white/10 group-hover:bg-red-500/20 transition duration-300">
                <Icon className="text-xl text-white group-hover:scale-110 transition duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition duration-300">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Accent Line */}
              <div className="mt-4 h-[2px] w-8 bg-red-500 transition-all duration-300 group-hover:w-16"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;