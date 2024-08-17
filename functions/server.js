const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const cors = require("cors"); // Import the CORS middleware

// Models
const Product = require("../models/productModel");
const Student = require("../models/StudentModel");
const SuperAdmin = require("../models/SuderAdminModel");

// CORS Configuration
const allowedOrigins = [
  'https://rainbow-blini-fe5194.netlify.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests from allowed origins or server-to-server requests
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Set up serverless function
app.use("/.netlify/functions/server", router);

// Routes
router.get("/api/hi", (req, res) => {
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
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Create New Student
router.post("/student", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Create New Super Admin
router.post("/superadmin", async (req, res) => {
  try {
    // If you want to save to the database, uncomment the following lines:
    const superAdmin = await SuperAdmin.create(req.body);
    res.status(200).json(superAdmin);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Fetch All Students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Heshan655:dpva3vAsfD71ZlCh@devetaminapi.62egjtv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DevetaminAPI"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports.handler = serverless(app);
