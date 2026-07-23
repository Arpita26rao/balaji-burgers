function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-orange-500">
          Balaji Burgers 🍔
        </h2>

        <p className="text-gray-500 text-sm">
          © 2026 Balaji Burgers. All rights reserved.
        </p>

        <div className="flex gap-5 text-gray-400">
          <a href="#" className="hover:text-orange-500 transition">
            Instagram
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;