function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}

export default FeatureCard;