function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">

      <h1 className="text-5xl md:text-7xl font-bold text-red-600">
        Transform Your Body
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Join Fit Zone Gym and unlock your true strength with expert trainers and modern equipment.
      </p>

      <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
        Join Now
      </button>

    </section>
  )
}

export default Hero;