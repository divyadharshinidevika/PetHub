import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.phone || !form.password) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      alert(res.data.message);

      navigate("/verify-otp", {
        state: {
          email: form.email,
        },
      });
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[480px]">
        <BackButton />

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Create Account 🐾
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
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
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-pink-600 text-white py-4 rounded-xl font-semibold hover:bg-pink-700"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </div>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?
        </p>

        <Link to="/login">
          <button className="w-full mt-4 border border-pink-600 text-pink-600 py-3 rounded-xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;