const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json([
    {
      name: "Dog Food",
      category: "Dogs",
      price: 599,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500",
    },
    {
      name: "Cat Toy",
      category: "Cats",
      price: 299,
      image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500",
    },
  ]);
});

module.exports = router;