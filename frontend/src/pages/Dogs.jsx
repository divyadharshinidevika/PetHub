import DogCard from "../components/DogCard";
import PetProductCard from "../components/PetProductCard";
import BackButton from "../components/BackButton";
function Dogs() {
  const dogs = [
    {
      name: "Golden Retriever",
      breed: "Golden Retriever",
      gender: "Male",
      age: "3 Months",
      vaccinated: "Yes",
      price: 18000,
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
    },
    {
      name: "Labrador Puppy",
      breed: "Labrador",
      gender: "Female",
      age: "4 Months",
      vaccinated: "Yes",
      price: 16000,
      image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=600",
    },
    {
      name: "German Shepherd",
      breed: "German Shepherd",
      gender: "Male",
      age: "5 Months",
      vaccinated: "Yes",
      price: 22000,
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600",
    },
  ];

  const products = [
    {
      name: "Premium Dog Food",
      brand: "Pedigree",
      type: "Food",
      rating: "4.8",
      price: 799,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600",
    },
    {
      name: "Dog Collar",
      brand: "PawStyle",
      type: "Accessory",
      rating: "4.6",
      price: 299,
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600",
    },
    {
      name: "Dog Supplements",
      brand: "PetCare",
      type: "Supplement",
      rating: "4.7",
      price: 499,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 px-16 py-10">
        <BackButton />
      <h1 className="text-5xl font-bold mb-4">🐶 Dogs</h1>
      <p className="text-gray-600 mb-12">
        Choose healthy dogs and essential dog care products.
      </p>

      <h2 className="text-3xl font-bold mb-8">Available Dogs</h2>
      <div className="grid grid-cols-3 gap-8 mb-20">
        {dogs.map((dog, index) => (
          <DogCard key={index} {...dog} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">Dog Products & Supplements</h2>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <PetProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Dogs;