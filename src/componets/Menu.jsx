const menuItems = [
  {
    name: "Classic Burger",
    category: "Burgers",
    description: "Juicy patty with fresh vegetables and special sauce.",
    price: "₹149",
    emoji: "🍔",
  },
  {
    name: "Cheese Burger",
    category: "Burgers",
    description: "Loaded with melted cheese and our signature sauce.",
    price: "₹179",
    emoji: "🍔",
  },
  {
    name: "French Fries",
    category: "Sides",
    description: "Crispy golden fries seasoned to perfection.",
    price: "₹99",
    emoji: "🍟",
  },
  {
    name: "Loaded Fries",
    category: "Sides",
    description: "Crispy fries loaded with cheese and delicious toppings.",
    price: "₹149",
    emoji: "🍟",
  },
  {
    name: "Cold Drink",
    category: "Beverages",
    description: "Chilled and refreshing drink to complete your meal.",
    price: "₹59",
    emoji: "🥤",
  },
  {
    name: "Burger Combo",
    category: "Combos",
    description: "Burger, crispy fries and a refreshing drink.",
    price: "₹249",
    emoji: "🍔",
  },
];

function Menu() {
  return (
    <section id="menu" className="px-8 py-20 bg-zinc-950">
      <div className="text-center mb-12">
        <p className="text-orange-500 uppercase tracking-widest">
          Our Menu
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Choose Your Favorite
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-zinc-900 rounded-2xl p-6 hover:-translate-y-2 transition"
          >
            <div className="h-48 bg-zinc-800 rounded-xl flex items-center justify-center text-7xl mb-6">
              {item.emoji}
            </div>

            <p className="text-orange-500 text-sm uppercase tracking-wider mb-2">
              {item.category}
            </p>

            <h3 className="text-2xl font-bold mb-2">
              {item.name}
            </h3>

            <p className="text-gray-400 mb-4">
              {item.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-orange-500 text-xl font-bold">
                {item.price}
              </span>

              <button className="bg-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-orange-600">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;