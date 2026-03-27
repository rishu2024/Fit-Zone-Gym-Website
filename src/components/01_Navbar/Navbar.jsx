import logo from "../../assets/Center_logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 w-full backdrop-blur bg-black/50 border-b border-gray-800">

      <div className="text-size-xl max-w-8xl mx-auto flex items-center justify-between px-8 py-5 text-white">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-lg font-bold text-red-500">
            FitZone Gym
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#services" className="hover:text-red-500 transition">Programs</a>
          <a href="#pricing" className="hover:text-red-500 transition">Pricing</a>
          <a href="#features" className="hover:text-red-500 transition">About</a>
        </nav>

        {/* Button  */}
        <button className="bg-red-600 px-5 py-2 rounded-full hover:bg-red-700 transition">
          Join Now
        </button>

      </div>
    </header>
  );
}

export default Navbar;