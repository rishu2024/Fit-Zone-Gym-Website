import { useState } from "react";
import Programclick from "../11_Programclick/Programclick";

function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const programs = [
    {
      title: "Strength Training",
      desc: "Build muscle and increase power with expert guidance.",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      benefits: [
        "Increase muscle mass",
        "Boost metabolism",
        "Improve bone strength",
        "Enhance overall power",
      ],
      why: "Perfect for those who want to gain strength, build a solid physique, and improve long-term fitness.",
    },
    {
      title: "Cardio Fitness",
      desc: "Boost stamina and burn calories with high-energy workouts.",
      img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
      benefits: [
        "Burn fat effectively",
        "Improve heart health",
        "Increase stamina",
        "Reduce stress",
      ],
      why: "Best for weight loss and improving endurance with fun, energetic workouts.",
    },
    {
      title: "Yoga & Flexibility",
      desc: "Improve flexibility, balance, and mental wellness.",
      img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
      benefits: [
        "Increase flexibility",
        "Reduce stress & anxiety",
        "Improve posture",
        "Enhance mental clarity",
      ],
      why: "Ideal for relaxation, recovery, and improving mind-body balance.",
    },
    {
      title: "Personal Training",
      desc: "Get customized workout plans from professional trainers.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      benefits: [
        "Personalized workout plan",
        "Faster results",
        "One-on-one guidance",
        "Proper form & safety",
      ],
      why: "Best choice if you want dedicated support and faster transformation.",
    },
  ];

  const handleOpen = (program) => {
    setSelectedProgram(program);
    setOpenModal(true);
  };

  const handleJoin = () => {
    setOpenModal(false);

    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
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
              onClick={() => handleOpen(item)}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.img}?auto=format&fit=crop&w=800&q=80)`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 z-10 w-full">
                <h3 className="text-xl font-semibold group-hover:text-red-400 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  {item.desc}
                </p>

                <span className="block h-[2px] bg-red-500 w-0 group-hover:w-12 transition-all duration-300 mt-2"></span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpen(item);
                  }}
                  className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 relative overflow-hidden px-4 py-2 rounded-full text-sm font-semibold text-white group/btn"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"></span>
                  <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-white/20 blur-lg transition"></span>
                  <span className="relative z-10">Explore →</span>
                </button>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-red-500/50 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Programclick
        program={selectedProgram}
        isOpen={openModal}
        setIsOpen={setOpenModal}
        onJoin={handleJoin}
      />
    </section>
  );
}

export default Programs;