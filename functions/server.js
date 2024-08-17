const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const cors = require("cors"); // Import the CORS middleware
const session = require("express-session");

// Models
const Product = require("../models/productModel");
const Student = require("../models/StudentModel");
const SuperAdmin = require("../models/SuderAdminModel");

// CORS Configuration
const allowedOrigins = [
  "https://rainbow-blini-fe5194.netlify.app",
  "http://localhost:3000",
];

// cors
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests from allowed origins or server-to-server requests
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// session config
app.use(
  session({
    secret: "LMS", // Replace with a strong, random secret
    resave: false, // Don't save the session if it wasn't modified
    saveUninitialized: true, // Save a new, uninitialized session
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 60000, // Session expiration time in milliseconds (1 minute)
    },
  })
);

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

router.post("/superadmin/login", async (req, res) => {
  try {
    const { superAdminId, superAdminPassword } = req.body;

    const superAdmin = await SuperAdmin.find({
      superAdminId: superAdminId,
      superAdminPassword: superAdminPassword,
    });

    if (superAdmin.length > 0) {
      req.session.userId = superAdminId;
      res.status(200).json({"message": "success"});

    } else {
      res.status(404).json({ message: "Super Admin not found" });
      
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get('/getuserid', (req, res) => {
  if (req.session.userId) {
    res.send(`${req.session.userId}`);
  } else {
    res.status(401).send('Please log in');
  }
});

// Example route to destroy the session
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.send('User logged out and session destroyed');
  });
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
