const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.render("./pug/login", { shopName: "Mandarin Muffin" }); // Add dynamic content
});

module.exports = router;
