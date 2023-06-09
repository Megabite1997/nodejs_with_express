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

router.get("/contactus", (req, res, next) => {
  res.render("./handlebars/contactus", {
    pageTitle: "You can contact us",
    layout: false,
  });
});

router.get("/donate", (req, res, next) => {
  const employees = [{ name: "Water", position: "Software engineer" }];
  res.render("./handlebars/donate", {
    companyNumber: "086-446-4444",
    employees,
    hasEmployee: employees.length > 0,
  });
});

router.get("/lightroom", (req, res, next) => {
  res.render("./ejs/lightroom", {
    pageTitle: "HERE IS LIGHTROOM",
    memberNumber: 10,
    teachers: [
      { name: "Bob", course: "Math" },
      { name: "Janifer", course: "Surviving" },
    ],
  });
});

router.get("/darkroom", (req, res, next) => {
  res.render("./ejs/darkroom");
});

module.exports = router;
