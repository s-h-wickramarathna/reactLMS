const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const cors = require("cors") // Import the CORS middleware
const path = require("path");

// Models
const Product = require("../models/productModel");
const Student = require("../models/StudentModel");
const SuperAdmin = require("../models/SuderAdminModel");

const allowedOrigins = [
  'https://rainbow-blini-fe5194.netlify.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins array or if there's no origin (for server-to-server requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use("/.netlify/functions/server", router); // path must route to lambda
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

// Create New Student
router.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Fetch All Students
router.get("/students", async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://Heshan655:dpva3vAsfD71ZlCh@devetaminapi.62egjtv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DevetaminAPI"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports.handler = serverless(app);
