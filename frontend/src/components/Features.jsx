import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="px-16 py-16 bg-pink-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose PetHub?
      </h2>

      <div className="grid grid-cols-4 gap-8">
        <FeatureCard
          icon="🚚"
          title="Fast Delivery"
          text="Quick and safe delivery for all pet products."
        />

        <FeatureCard
          icon="💳"
          title="Secure Payment"
          text="Easy and trusted payment options."
        />

        <FeatureCard
          icon="🐾"
          title="Pet Care"
          text="Helpful products for your pet's healthy lifestyle."
        />

        <FeatureCard
          icon="⭐"
          title="Best Quality"
          text="Premium food, toys, and accessories."
        />
      </div>
    </section>
  );
}

export default Features;