import { useCart } from "../context/CartContext";

function DogCard({ image, name, breed, gender, age, vaccinated, price }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-2 transition">
      <img src={image} alt={name} className="w-full h-60 object-cover" />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-500">{breed}</p>

        <div className="mt-4 space-y-2 text-gray-700">
          <p>👤 Gender: {gender}</p>
          <p>🎂 Age: {age}</p>
          <p>💉 Vaccinated: {vaccinated}</p>
        </div>

        <p className="text-pink-600 text-2xl font-bold mt-4">₹{price}</p>

        <button
          onClick={() => addToCart({ image, name, breed, gender, age, vaccinated, price })}
          className="mt-4 w-full bg-pink-600 text-white py-3 rounded-xl"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default DogCard;