import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 px-16 py-16">

      <h1 className="text-5xl font-bold mb-4">
        Contact Us 📞
      </h1>

      <p className="text-gray-500 mb-12">
        We'd love to hear from you.
      </p>

      <div className="grid grid-cols-2 gap-10">
 <BackButton />

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Get in Touch
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border p-4 rounded-xl"
            ></textarea>

            <button className="bg-pink-600 text-white px-8 py-4 rounded-xl">
              Send Message
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            PetHub Store
          </h2>

          <div className="space-y-4 text-lg">
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ support@pethub.com</p>
            <p>🕒 9 AM - 9 PM</p>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="text-pink-600 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;