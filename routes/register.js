const express = require("express");

const router = express.Router();

router.get("/register", (req, res, next) => {
  res.render("./pug/register");
  // we have defined all the views are in views folder, no need to constract a path.
  // no need for "register.pug" because we defined pug as the default templating engine.
});

module.exports = router;
