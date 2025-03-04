const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/api.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "This is Express-mongo-App" });
  });
  

connectDB();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started`);
});
