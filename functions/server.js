const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const Product = require("./models/productModel");
router.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

router.get("/save", (req, res) => {
    res.send("save Page");
  });

router.get("/product", async (req, res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });


mongoose
  .connect(
    "mongodb+srv://Heshan655:6uVyUM7q9nIBO2OC@devetaminapi.62egjtv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DevetaminAPI"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/.netlify/functions/server", router); // path must route to lambda
module.exports.handler = serverless(app);
