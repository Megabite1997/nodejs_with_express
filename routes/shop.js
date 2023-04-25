const express = require("express");
const path = require("path");
// const rootDir = require("./util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile("/views/shop.html"); // This slash refers to our root folder on our OS

  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  // "__dirname", gives us the path of a file in which we use it.

  // res.sendFile(path.join(rootDir, "views", "shop.html")); // You can use this instead
});

router.get("/aboutus", (req, res, next) => {
  res.render("./pug/aboutus");
});

module.exports = router;
