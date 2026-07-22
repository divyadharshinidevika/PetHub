import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🐶",
      title: "Pet Marketplace",
      description: "Find healthy pets from trusted and verified sellers.",
    },
    {
      icon: "🛍️",
      title: "Pet Essentials",
      description: "Shop food, toys, medicines and premium accessories.",
    },
    {
      icon: "🩺",
      title: "Vet Support",
      description: "Connect with experienced veterinarians near you.",
    },
    {
      icon: "❤️",
      title: "Adoption",
      description: "Give a loving home to pets waiting for a family.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-600 text-2xl shadow-lg shadow-pink-200 transition duration-300 group-hover:-rotate-6 group-hover:scale-110">
            🐾
          </div>

          <div className="text-left">
            <h1 className="text-2xl font-black text-gray-900">PetHub</h1>
            <p className="text-xs font-medium text-gray-500">
              Love. Care. Connect.
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-4 sm:flex">
          <button
            onClick={() => navigate("/login")}
            className="rounded-xl px-6 py-3 font-semibold text-gray-700 transition duration-300 hover:bg-white hover:text-pink-600 hover:shadow-md"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:shadow-xl"
          >
            Create Account
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 mx-auto grid min-h-[calc(100vh-110px)] max-w-7xl items-center gap-14 px-6 pb-16 pt-8 lg:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <section className="welcome-slide-left">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-pink-100 bg-white/80 px-5 py-3 shadow-lg shadow-pink-100 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
              🐾
            </span>

            <span className="text-sm font-bold text-gray-700">
              Trusted care for every pet
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              New
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] text-gray-900 sm:text-6xl lg:text-7xl">
            Everything your
            <span className="relative mx-3 inline-block text-pink-600">
              pet
              <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-yellow-300/70" />
            </span>
            needs.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">
            Discover pets, shop trusted products, book veterinary care and
            manage your pet’s needs from one simple platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/login")}
              className="group flex items-center justify-center gap-3 rounded-2xl bg-pink-600 px-9 py-4 text-lg font-bold text-white shadow-xl shadow-pink-200 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-pink-700 hover:shadow-2xl"
            >
              Get Started
              <span className="transition duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="rounded-2xl border-2 border-gray-200 bg-white/70 px-9 py-4 text-lg font-bold text-gray-800 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-pink-300 hover:bg-white hover:text-pink-600 hover:shadow-xl"
            >
              Join PetHub
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1552053831-71594a27632d?w=100",
                "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=100",
                "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=100",
                "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=100",
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Pet"
                  className="h-12 w-12 rounded-full border-4 border-white object-cover shadow-md transition duration-300 hover:z-10 hover:-translate-y-2 hover:scale-125"
                />
              ))}
            </div>

            <div>
              <div className="text-lg text-yellow-500">★★★★★</div>
              <p className="text-sm font-semibold text-gray-600">
                Loved by pet parents
              </p>
            </div>
          </div>
        </section>

        {/* Right Visual */}
        <section className="welcome-slide-right relative mx-auto w-full max-w-[590px]">
          <div className="absolute inset-8 rounded-[60px] bg-gradient-to-br from-pink-300 to-orange-200 opacity-50 blur-2xl" />

          <div className="relative rounded-[42px] border border-white/80 bg-white/65 p-5 shadow-2xl backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:rotate-1">
            {/* Pet Image Grid */}
            <div className="grid h-[520px] grid-cols-2 gap-4 overflow-hidden rounded-[32px] bg-pink-50 p-4">
              <div className="group relative row-span-2 overflow-hidden rounded-[26px]">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=900"
                  alt="Golden Retriever"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest">
                    Friendly companion
                  </p>
                  <h3 className="text-xl font-bold">Golden Retriever</h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[26px]">
                <img
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=700"
                  alt="Cat"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 backdrop-blur">
                  🐱 Cats
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500"
                    alt="Bird"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-125"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-xs font-bold text-white">🐦 Birds</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500"
                    alt="Fish"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-125"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-xs font-bold text-white">🐠 Fish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="welcome-float absolute -left-8 top-16 hidden rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
                🩺
              </span>
              <div>
                <p className="font-bold text-gray-900">Vet Support</p>
                <p className="text-xs text-gray-500">Available anytime</p>
              </div>
            </div>
          </div>

          <div className="welcome-float-delayed absolute -right-8 top-1/3 hidden rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
                🚚
              </span>
              <div>
                <p className="font-bold text-gray-900">Fast Delivery</p>
                <p className="text-xs text-gray-500">Pet essentials delivered</p>
              </div>
            </div>
          </div>

          <div className="welcome-float absolute -bottom-7 left-16 rounded-2xl border border-white bg-gray-900 px-6 py-4 text-white shadow-2xl">
            <p className="text-xs font-semibold text-gray-300">
              PetHub Community
            </p>

            <div className="mt-1 flex items-end gap-2">
              <span className="text-2xl font-black">25K+</span>
              <span className="pb-1 text-sm text-gray-300">happy pets</span>
            </div>
          </div>
        </section>
      </main>

      {/* Feature Cards */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group cursor-pointer rounded-3xl border border-white/80 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-pink-200 hover:bg-white hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-3xl transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-pink-100">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 transition group-hover:text-pink-600">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-pink-600 opacity-0 transition duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                Explore
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Welcome;