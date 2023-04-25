const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");

const app = express();

// --------------------------set 'PUG' template engine----------------------------------

// app.set("view engine", "pug");
// set any values globally on ExpressJS.
// is has many default properties you can use with set method.
// "view engine", is a property allows us to tell ExpressJS for any dynamic templates we're trying to render.
// "pug", second argument, tell that we wan to use pug, a template engine.

// app.set("views", "views"); // the default is 'views', but it your folder is not name 'view', change the second argument to your folder name.

// -------------------------------------------------------------------------------------

// --------------------------set 'Handlebars' template engine---------------------------

app.engine(
  "hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views/layouts/",
  }),
);
// register new template engine, but PUG not cause it is builtin.

app.set("view engine", "hbs"); // switch to use 'handlebars'
app.set("views", "views");

// -------------------------------------------------------------------------------------

const adminRoute = require("./routes/admin");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // anything try to file a .css or .javascript files
// it will automatically forward it to the public folder.

app.use("/admin", adminRoute);
app.use(registerRoute);
app.use(loginRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3005);
