import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";

function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) {
      return alert("Please enter OTP");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          email,
          otp,
        }
      );

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "OTP Verification Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/resend-otp",
        {
          email,
        }
      );

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[480px]">

        <BackButton />

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-3">
          Verify OTP 🐾
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter the verification code sent to
        </p>

        <p className="text-center font-semibold text-pink-600 mb-6 break-all">
          {email}
        </p>

        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border p-4 rounded-xl outline-none text-center text-2xl tracking-[10px]"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full mt-6 bg-pink-600 text-white py-4 rounded-xl font-semibold hover:bg-pink-700 transition"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={handleResend}
          className="w-full mt-4 border border-pink-600 text-pink-600 py-3 rounded-xl hover:bg-pink-50 transition"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}

export default VerifyOTP;