import { useState, useEffect } from "react";
import logo from "../../assets/Monoline Gym Logo.jpg";
import Joinclick from "../08_Joinclick/Joinclick";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "services", "pricing", "footer"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((item) => {
          if (item.isIntersecting) {
            setActive(item.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Programs" },
    { id: "pricing", label: "Pricing" },
    { id: "footer", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "bg-black/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">

        <div
          onClick={() => goToSection("home")}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
        >
          <img src={logo} className="w-12 h-12" />
          <div>
            <h1 className="text-red-500 font-bold">FitZone Gym</h1>
            <p className="text-xs text-gray-400">Transform Your Body</p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 items-center">

          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              <span
                onClick={() => goToSection(item.id)}
                className={`cursor-pointer transition duration-300 transform ${
                  active === item.id
                    ? "text-red-500 scale-105"
                    : "hover:text-red-500 hover:scale-105"
                }`}
              >
                {item.label}
              </span>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                  active === item.id
                    ? "w-12"
                    : "w-0 group-hover:w-12"
                }`}
              ></span>
            </div>
          ))}

          <button
            onClick={() => setClickOpen(true)}
            className="relative overflow-hidden px-6 py-2 rounded-full font-semibold text-white transition duration-300 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:scale-110 transition"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500 blur-md transition"></span>
            <span className="relative z-10">
              Join Now →
            </span>
          </button>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-6">

          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => goToSection(item.id)}
              className={`cursor-pointer ${
                active === item.id
                  ? "text-red-500"
                  : "hover:text-red-500"
              }`}
            >
              {item.label}
            </span>
          ))}

          <button
            onClick={() => setClickOpen(true)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:scale-105 transition"
          >
            Join Now →
          </button>

        </div>
      )}

      <Joinclick isOpen={clickOpen} setIsOpen={setClickOpen} />
    </header>
  );
}

export default Navbar;