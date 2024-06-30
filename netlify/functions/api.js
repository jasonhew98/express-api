const express = require("express");
const serverless = require("serverless-http");

const api = express();

const router = express.Router();
router.get("/users", (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  };
  res.json([user]);
});

api.use("/api/", router);

module.exports.handler = serverless(api);
