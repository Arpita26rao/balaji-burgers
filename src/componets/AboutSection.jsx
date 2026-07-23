function About() {
  return (
    <section id="about" className="px-8 py-20 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-500 uppercase tracking-widest mb-3">
            About Balaji Burgers
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Made Fresh.
            <span className="text-orange-500"> Served With Love.</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            At Balaji Burgers, we believe that great food brings people
            together. From juicy burgers to crispy fries, every item is
            prepared fresh with quality ingredients and lots of flavor.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Whether you are grabbing a quick bite or enjoying a meal with
            friends, we are here to serve delicious food that makes every
            visit special.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 text-center">
          <div className="text-8xl mb-6">🍔</div>

          <h3 className="text-2xl font-bold mb-3">
            Freshness in Every Bite
          </h3>

          <p className="text-gray-400">
            Quality ingredients. Bold flavors. Happy customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;