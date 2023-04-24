const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
// set any values globally on ExpressJS.
// is has many default properties you can use with set method.
// "view engine", is a property allows us to tell ExpressJS for any dynamic templates we're trying to render.
// "pug", second argument, tell that we wan to use pug, a template engine.

app.set("views", "views"); // the default is 'views', but it your folder is not name 'view', change the second argument to your folder name.

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // anything try to file a .css or .javascript files
// it will automatically forward it to the public folder.

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3005);
