const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log(
    "Route / handler act as a middleware 1 if next is present or invoked",
  );
  next();
});

app.use(
  "/user",
  (req, res, next) => {
    console.log(
      "Route handler 1 for /user (act as a middleware 2 if next is present or invoked)",
    );
    next()
  },
  (req, res) => {
    console.log("route handler 2");
    res.send("route handler 2 for /user");
  },
);

const portNum = 7777;
app.listen(portNum, () => {
  console.log("Server is listening on port number", portNum);
});
