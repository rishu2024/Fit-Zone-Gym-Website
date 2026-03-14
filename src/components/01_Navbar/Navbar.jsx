function Navbar() {
  return (
    <header className="bg-black text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-red-500">
          FitZone Gym
        </h1>

        <nav className="flex gap-8">
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">About</a>
          <a href="#" className="hover:text-red-500">Services</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </nav>
        
        <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
          Join Now
        </button>

      </div>
    </header>
  )
}

export default Navbar