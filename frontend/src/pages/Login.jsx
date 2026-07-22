import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // Save PetHub Token
      localStorage.setItem("pethub_token", res.data.token);

      // Save PetHub User
      localStorage.setItem(
        "pethub_user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful 🐾");

      navigate("/dashboard", { replace: true });

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[450px]">

        

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Welcome Back 🐾
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-pink-600 text-white py-4 rounded-xl font-semibold hover:bg-pink-700"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </div>

        <p className="text-center mt-6 text-gray-500">
          Don't have an account?
        </p>

        <div className="mt-6 text-center">
          <Link to="/signup">
            <button className="w-full mt-4 border border-pink-600 text-pink-600 py-3 rounded-xl">
              Create Account
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;