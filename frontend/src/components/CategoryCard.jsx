function CategoryCard({ image, title }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;