function Footer() {
  return (
    <footer className="bg-pink-600 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-16 grid grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            🐾 PetHub
          </h2>
          <p>
            Your trusted companion for pets and pet products.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <p>Dogs</p>
          <p>Cats</p>
          <p>Birds</p>
          <p>Fish</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📍 Chennai</p>
          <p>📞 +91 9876543210</p>
          <p>✉ support@pethub.com</p>
        </div>

      </div>

      <div className="text-center mt-10">
        © 2026 PetHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;