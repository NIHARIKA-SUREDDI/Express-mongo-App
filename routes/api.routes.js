const express = require("express");
const router = express.Router();



router.get("/data", (req, res) => {
  res.status(200).json({ data: ["Apple", "Banana", "Orange"] });
});

module.exports = router;
