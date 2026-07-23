function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between bg-black">
      <h1 className="text-2xl font-bold text-orange-500">
        Balaji Burgers 🍔
      </h1>

      <div className="flex gap-8 text-white">
        <a href="#home" className="hover:text-orange-500">
          Home
        </a>

        <a href="#menu" className="hover:text-orange-500">
          Menu
        </a>

        <a href="#about" className="hover:text-orange-500">
          About
        </a>

        <a href="#contact" className="hover:text-orange-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;