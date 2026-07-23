const menuItems = [
  {
    name: "Melted Burger",
    category: "Burgers",
    description: "Juicy burger loaded with melted cheese and fresh ingredients.",
    price: "₹50",
    image: "/images/melted Burger.png",
  },
  {
    name: "French Fries",
    category: "Fries",
    description: "Crispy golden fries, freshly prepared and perfectly seasoned.",
    price: "₹40",
    image: "/images/french fries.png",
  },
  {
    name: "Peri Peri Fries",
    category: "Fries",
    description: "Crispy fries tossed with delicious spicy peri peri seasoning.",
    price: "₹50",
    image: "/images/peri-peri Fries.png",
  },
  {
    name: "Fried Momos",
    category: "Momos",
    description: "Crispy fried momos served with delicious spicy chutney.",
    price: "₹50",
    image: "/images/fried momos.png",
  },
  {
    name: "Patties",
    category: "Patties",
    description: "Freshly baked, crispy and delicious patties.",
    price: "₹20",
    image: "/images/patties.png",
  },
  {
    name: "Tea & Coffee",
    category: "Drinks",
    description: "Freshly prepared hot tea and coffee.",
    price: "₹10",
    image: "/images/tea and coffee.png",
  },
  {
    name: "Dips",
    category: "Dips",
    description: "Delicious sauces to make every bite more flavorful.",
    price: "₹20",
    image: "/images/dips.png",
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
            className="bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition"
          >
            <div className="h-56 bg-zinc-800">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;