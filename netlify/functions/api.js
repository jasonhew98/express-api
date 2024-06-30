const cors = require('cors');
const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(cors());

const router = express.Router();
router.get("/users", (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  };
  res.json([user]);
});

app.use("/api/", router);

module.exports.handler = serverless(app);
