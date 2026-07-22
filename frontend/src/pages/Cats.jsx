import DogCard from "../components/DogCard";
import PetProductCard from "../components/PetProductCard";
function Cats() {
  const cats = [
    {
      name: "Persian Cat",
      breed: "Persian",
      gender: "Female",
      age: "4 Months",
      vaccinated: "Yes",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600",
    },
    {
      name: "Siamese Cat",
      breed: "Siamese",
      gender: "Male",
      age: "5 Months",
      vaccinated: "Yes",
      price: 14000,
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
    },
    {
      name: "Maine Coon",
      breed: "Maine Coon",
      gender: "Female",
      age: "6 Months",
      vaccinated: "Yes",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600",
    },
  ];

  const products = [
    {
      name: "Cat Food",
      brand: "Whiskas",
      type: "Food",
      rating: "4.8",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600",
    },
    {
      name: "Cat Litter",
      brand: "Catsan",
      type: "Litter",
      rating: "4.7",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600",
    },
    {
      name: "Cat Toy",
      brand: "PetCare",
      type: "Toy",
      rating: "4.6",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 px-16 py-10">
        

      <h1 className="text-5xl font-bold mb-4">🐱 Cats</h1>

      <p className="text-gray-600 mb-12">
        Choose healthy cats and essential cat products.
      </p>

      <h2 className="text-3xl font-bold mb-8">Available Cats</h2>

      <div className="grid grid-cols-3 gap-8 mb-20">
        {cats.map((cat, index) => (
          <DogCard key={index} {...cat} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">Cat Products</h2>

      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <PetProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Cats;