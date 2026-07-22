import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="min-h-screen bg-pink-50 px-16 py-10">
      <BackButton />

      <h1 className="text-5xl font-bold mb-10">
        💳 Checkout
      </h1>

      <div className="grid grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Delivery Details
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              placeholder="Address"
              rows="4"
              className="w-full border p-4 rounded-xl"
            ></textarea>

            <input
              type="text"
              placeholder="City"
              className="w-full border p-4 rounded-xl"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Payment Method
          </h2>

          <div className="space-y-4">
            <label className="flex gap-3">
              <input type="radio" name="payment" />
              Cash on Delivery
            </label>

            <label className="flex gap-3">
              <input type="radio" name="payment" />
              UPI Payment
            </label>

            <label className="flex gap-3">
              <input type="radio" name="payment" />
              Credit / Debit Card
            </label>
          </div>

          <button className="mt-10 w-full bg-pink-600 text-white py-4 rounded-xl text-lg">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;