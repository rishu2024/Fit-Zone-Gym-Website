import { useState, useEffect } from "react";
import logo from "../../assets/Center_logo.png";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        {/* Logo */}
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

        {/* Desktop Menu */}
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

              {/* 🔥 SAME AS PROGRAMS UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                  active === item.id
                    ? "w-12"
                    : "w-0 group-hover:w-12"
                }`}
              ></span>

            </div>
          ))}

          {/* Button */}
          <button className="bg-red-600 px-5 py-2 rounded transition duration-300 hover:bg-red-700 hover:scale-105">
            Join Now
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-6">

          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => goToSection(item.id)}
              className={`cursor-pointer transition duration-300 ${
                active === item.id
                  ? "text-red-500"
                  : "hover:text-red-500"
              }`}
            >
              {item.label}
            </span>
          ))}

          <button className="bg-red-600 px-5 py-2 rounded transition duration-300 hover:bg-red-700">
            Join Now
          </button>

        </div>
      )}
    </header>
  );
}

export default Navbar;