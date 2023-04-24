const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoute = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));
// parsing the end of middleware functions.
// make "req.body" can be read.

app.use(adminRoute);

app.use((req, res, next) => {
  next();
});
// "use()", allow us to add a new middleware function.
// This arrow function will be executed for every request.
// "next()", is a function that allows the request to travel on to the next middleware line.

app.use((req, res, next) => {
  console.log("Get request on local server port 3000");
  next();
});

app.use((req, res, next) => {
  console.log(
    "We are on the second middleware by next() from second middleware",
  );
  res.send("<h1>Welcome to server port 3005</h1>");
  // res.send(), auto setheader default
});

app.listen(3005);
