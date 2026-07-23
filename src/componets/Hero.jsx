function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-orange-500 uppercase tracking-widest mb-4">
        Fresh • Hot • Delicious
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Big Flavor.
        <span className="text-orange-500"> Big Burgers.</span>
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Juicy burgers, crispy fries, and delicious flavors made fresh for
        every bite.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3 rounded-full transition">
        Explore Menu
      </button>
    </section>
  );
}

export default Hero;