import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-16 py-6 bg-white shadow-sm">
      {/* Logo */}
      <Link to={token ? "/dashboard" : "/"}>
        <div className="text-3xl font-bold text-pink-700 cursor-pointer">
          🐾 PetHub
        </div>
      </Link>

      {/* Navigation */}
      <ul className="flex gap-10 font-medium text-gray-700">
        <a href="#categories">
          <li className="cursor-pointer hover:text-pink-600">
            Categories
          </li>
        </a>

        <a href="#features">
          <li className="cursor-pointer hover:text-pink-600">
            Features
          </li>
        </a>

        <a href="#featured">
          <li className="cursor-pointer hover:text-pink-600">
            Pets
          </li>
        </a>

        <Link to="/contact">
          <li className="cursor-pointer hover:text-pink-600">
            Contact
          </li>
        </Link>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex gap-4">
        <Link to="/cart">
          <button className="border border-pink-600 text-pink-600 px-5 py-3 rounded-lg font-semibold hover:bg-pink-50">
            Cart
          </button>
        </Link>

        {token ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;