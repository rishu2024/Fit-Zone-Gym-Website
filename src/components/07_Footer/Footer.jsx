import { useState } from "react";
import Toast from "../09_Toast/Toast";

function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  // ✅ Email validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ Empty check
    if (!email.trim()) {
      setToast({
        show: true,
        type: "error",
        message: "Please enter your email",
      });
      return;
    }

    // ❌ Invalid email
    if (!validateEmail(email)) {
      setToast({
        show: true,
        type: "error",
        message: "Please enter a valid email",
      });
      return;
    }

    // ✅ Success
    console.log("Subscribed:", email);

    setToast({
      show: true,
      type: "success",
      message: "Subscribed successfully 🎉",
    });

    setEmail("");

    // auto close toast
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <>
      {/* 🔥 Toast */}
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      <footer className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              FitZone Gym
            </h2>
            <p className="text-gray-400 mt-4 text-sm">
              Transform your body with expert guidance,
              modern equipment, and a motivating environment.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Programs</li>
              <li>Pricing</li>
              <li>About</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <p className="text-gray-400 text-sm">
              Mon – Sat : 6 AM – 10 PM
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Sunday : Closed
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get fitness tips and updates directly in your inbox.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden"
            >
              <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-transparent outline-none text-sm text-white placeholder-gray-500"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition"
              >
                →
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-4 mt-4 text-gray-400 text-sm">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>YouTube</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
          © 2026 FitZone Gym. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;