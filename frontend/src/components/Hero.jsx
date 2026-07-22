import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold">
            🐾 India's Smart Pet Platform
          </span>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">

            Everything
            <br />

            Your
            <span className="text-pink-600"> Pet </span>

            Needs.

          </h1>

          <p className="text-xl text-gray-600 mt-8 leading-9">

            Buy pets, shop premium products, adopt rescued animals,
            book trusted veterinarians and give your furry friend
            the best care — all in one beautiful platform.

          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => navigate("/dogs")}
              className="bg-pink-600 hover:bg-pink-700 hover:scale-105 transition duration-300 text-white px-10 py-4 rounded-2xl shadow-xl"
            >
              Shop Pets →
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-pink-600 hover:bg-pink-600 hover:text-white transition duration-300 px-10 py-4 rounded-2xl"
            >
              Contact Us
            </button>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">

              <h2 className="text-4xl font-black text-pink-600">

                25K+

              </h2>

              <p className="text-gray-500 mt-2">

                Happy Pets

              </p>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">

              <h2 className="text-4xl font-black text-pink-600">

                500+

              </h2>

              <p className="text-gray-500 mt-2">

                Products

              </p>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-3 transition duration-300">

              <h2 className="text-4xl font-black text-pink-600">

                24/7

              </h2>

              <p className="text-gray-500 mt-2">

                Vet Support

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200"
            alt="PetHub"
            className="rounded-[40px] shadow-2xl hover:scale-105 transition duration-500"
          />

          {/* Floating Card */}

          <div className="absolute top-8 -left-8 bg-white rounded-2xl shadow-xl p-5 hover:scale-110 transition">

            ⭐⭐⭐⭐⭐

            <p className="font-bold mt-2">

              Trusted by Pet Lovers

            </p>

          </div>

          <div className="absolute bottom-10 -right-8 bg-white rounded-2xl shadow-xl p-5 hover:scale-110 transition">

            🚚

            <p className="font-bold mt-2">

              Fast Delivery

            </p>

          </div>

          <div className="absolute top-1/2 -right-10 bg-white rounded-2xl shadow-xl p-5 hover:scale-110 transition">

            🩺

            <p className="font-bold mt-2">

              Vet Available

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;