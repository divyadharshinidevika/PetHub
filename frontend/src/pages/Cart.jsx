
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <div className="min-h-screen bg-pink-50 px-16 py-10">
      

      <h1 className="text-5xl font-bold mb-10">
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add pets or products to your cart.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-5 flex items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-xl object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.breed || item.brand || item.type}
                  </p>

                  <p className="text-pink-600 text-2xl font-bold mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
            <h2 className="text-3xl font-bold">
              Total: ₹{total}
            </h2>

<Link to="/checkout">
  <button className="mt-6 bg-pink-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-pink-700">
    Proceed to Checkout
  </button>
</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;