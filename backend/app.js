const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");

const employeeRoute = require("./src/routes/employeeRoute");


app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/employees", employeeRoute);

app.listen(3001);
