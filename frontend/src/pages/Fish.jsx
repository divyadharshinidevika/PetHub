import DogCard from "../components/DogCard";
import PetProductCard from "../components/PetProductCard";
import BackButton from "../components/BackButton";
function Fish() {
  const fishes = [
    {
      name: "Gold Fish",
      breed: "Gold Fish",
      gender: "Male",
      age: "3 Months",
      vaccinated: "Yes",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600",
    },
    {
      name: "Betta Fish",
      breed: "Betta",
      gender: "Female",
      age: "4 Months",
      vaccinated: "Yes",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600",
    },
    {
      name: "Koi Fish",
      breed: "Koi",
      gender: "Male",
      age: "5 Months",
      vaccinated: "Yes",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    },
  ];

  const products = [
    {
      name: "Fish Food",
      brand: "AquaCare",
      type: "Food",
      rating: "4.8",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600",
    },
    {
      name: "Aquarium",
      brand: "Ocean Life",
      type: "Tank",
      rating: "4.9",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600",
    },
    {
      name: "Water Filter",
      brand: "AquaPro",
      type: "Filter",
      rating: "4.7",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 px-16 py-10">
          <BackButton />
      <h1 className="text-5xl font-bold mb-4">🐠 Fish</h1>

      <p className="text-gray-600 mb-12">
        Healthy fishes and aquarium essentials.
      </p>

      <h2 className="text-3xl font-bold mb-8">Available Fish</h2>

      <div className="grid grid-cols-3 gap-8 mb-20">
        {fishes.map((fish, index) => (
          <DogCard key={index} {...fish} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">Fish Products</h2>

      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <PetProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Fish;