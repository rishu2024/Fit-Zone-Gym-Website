function Footer() {
  const goToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">FitZone Gym</h2>
            <p className="text-gray-400 mt-3 text-sm">
              Transform your body with expert guidance, modern equipment,
              and a motivating environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Programs" },
                { id: "pricing", label: "Pricing" },
                { id: "footer", label: "About" },
              ].map((item, i) => (
                <li
                  key={i}
                  onClick={() => goToSection(item.id)}
                  className="cursor-pointer transition duration-300 hover:text-red-400 hover:translate-x-1"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold">Opening Hours</h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Mon - Sat : 6 AM – 10 PM</li>
              <li>Sunday : Closed </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-lg font-semibold">Stay Updated</h3>

            <p className="text-gray-400 text-sm mt-3">
              Get fitness tips and updates directly in your inbox.
            </p>

            {/* Input */}
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 bg-gray-800 text-sm outline-none rounded-l-md"
              />
              <button className="bg-red-600 px-4 rounded-r-md hover:bg-red-700 transition">
                →
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4 text-gray-400 text-sm">
              <span className="cursor-pointer hover:text-red-400 transition">Instagram</span>
              <span className="cursor-pointer hover:text-red-400 transition">Facebook</span>
              <span className="cursor-pointer hover:text-red-400 transition">YouTube</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FitZone Gym. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;