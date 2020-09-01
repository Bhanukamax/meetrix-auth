const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.post("/auth", async (req, res) => {
  if (!req.header("Authorization")) return res.send(400);

  const auth = req.header("Authorization");

  const parsed = await jwt.decode(auth);
  if (!parsed) return res.send(400);

  return res.send(parsed);
});
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
