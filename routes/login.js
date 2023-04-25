const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.render("./pug/login", {
    shopName: "Mandarin Muffin",
    products: [{ item: 1, price: 1.99 }],
  }); // Add dynamic content
});

module.exports = router;
