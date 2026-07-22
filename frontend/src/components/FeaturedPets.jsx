function FeaturedPets() {
  const pets = [
    {
      name: "Golden Retriever",
      age: "3 Months",
      price: "₹18,000",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
    },
    {
      name: "Persian Cat",
      age: "5 Months",
      price: "₹12,000",
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600",
    },
    {
      name: "Love Birds",
      age: "4 Months",
      price: "₹3,500",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    },
  ];

  return (
    <section id="featured" className="px-16 py-20 bg-pink-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Pets
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {pet.name}
              </h3>

              <p className="text-gray-500 mt-2">
                Age: {pet.age}
              </p>

              <p className="text-pink-600 text-2xl font-bold mt-4">
                {pet.price}
              </p>

              <button className="mt-5 w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPets;