function Contact() {
  return (
    <section id="contact" className="px-8 py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 uppercase tracking-widest mb-3">
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Visit <span className="text-orange-500">Balaji Burgers</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-4xl mb-4">📍</div>

            <h3 className="text-xl font-bold mb-2">
              Location
            </h3>

            <p className="text-gray-400">
              Your City, India
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-4xl mb-4">📞</div>

            <h3 className="text-xl font-bold mb-2">
              Call Us
            </h3>

            <p className="text-gray-400">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="text-4xl mb-4">🕒</div>

            <h3 className="text-xl font-bold mb-2">
              Opening Hours
            </h3>

            <p className="text-gray-400">
              11:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;