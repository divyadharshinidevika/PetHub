import { useCart } from "../context/CartContext";

function PetProductCard({ image, name, brand, type, rating, price }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-2 transition">
      <img src={image} alt={name} className="w-full h-56 object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>

        <div className="mt-3 space-y-2 text-gray-600">
          <p>🏷️ Brand: {brand}</p>
          <p>📦 Type: {type}</p>
          <p>⭐ Rating: {rating}</p>
        </div>

        <p className="text-pink-600 text-2xl font-bold mt-4">₹{price}</p>

        <button
          onClick={() => addToCart({ image, name, brand, type, rating, price })}
          className="mt-4 w-full bg-pink-600 text-white py-3 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PetProductCard;