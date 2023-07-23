const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
});
app.use(bodyParser.json());

let count = 0;

app.get("/api/count", (req, res) => {
  res.json({ count });
});

app.post("/api/increment", (req, res) => {
  count = req.body.count;
  res.json({ count });
});

app.post("/api/decrement", (req, res) => {
  count = req.body.count;
  res.json({ count });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
