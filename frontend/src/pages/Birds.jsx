import DogCard from "../components/DogCard";
import PetProductCard from "../components/PetProductCard";

function Birds() {
  const birds = [
    {
      name: "Love Bird",
      breed: "Love Bird",
      gender: "Male",
      age: "4 Months",
      vaccinated: "Yes",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    },
    {
      name: "Cockatiel",
      breed: "Cockatiel",
      gender: "Female",
      age: "5 Months",
      vaccinated: "Yes",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600",
    },
    {
      name: "Macaw",
      breed: "Macaw",
      gender: "Male",
      age: "8 Months",
      vaccinated: "Yes",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600",
    },
  ];

  const products = [
    {
      name: "Bird Food",
      brand: "BirdCare",
      type: "Food",
      rating: "4.7",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    },
    {
      name: "Bird Cage",
      brand: "Pet House",
      type: "Cage",
      rating: "4.8",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600",
    },
    {
      name: "Bird Vitamins",
      brand: "PetCare",
      type: "Supplement",
      rating: "4.6",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 px-16 py-10">

  
      <h1 className="text-5xl font-bold mb-4">🐦 Birds</h1>

      <p className="text-gray-600 mb-12">
        Beautiful birds and essential bird products.
      </p>

      <h2 className="text-3xl font-bold mb-8">Available Birds</h2>

      <div className="grid grid-cols-3 gap-8 mb-20">
        {birds.map((bird, index) => (
          <DogCard key={index} {...bird} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">Bird Products</h2>

      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <PetProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Birds;