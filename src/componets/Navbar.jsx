function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between bg-black">

      {/* Logo */}
      <a href="/">
        <img
          src="/images/BB logo.png"
          alt="Balaji Bites Logo"
          className="w-32 h-auto"
        />
      </a>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-white">
        <a href="#home" className="hover:text-orange-500 transition">
          Home
        </a>

        <a href="#menu" className="hover:text-orange-500 transition">
          Menu
        </a>

        <a href="#about" className="hover:text-orange-500 transition">
          About
        </a>

        <a href="#contact" className="hover:text-orange-500 transition">
          Contact
        </a>
      </div>

      {/* Order Button */}
      <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
        Order Now
      </button>

    </nav>
  );
}

export default Navbar;