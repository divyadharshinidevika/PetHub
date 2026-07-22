function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">
          {name}
        </h3>

        <p className="text-pink-600 font-semibold mt-2">
          ₹{price}
        </p>

        <button className="mt-4 w-full bg-pink-600 text-white py-3 rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;