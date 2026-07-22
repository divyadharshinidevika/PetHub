import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    const token = localStorage.getItem("pethub_token");

    if (token) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mb-8 bg-white shadow-md px-6 py-3 rounded-xl hover:bg-pink-50"
    >
      ← Dashboard
    </button>
  );
}

export default BackButton;