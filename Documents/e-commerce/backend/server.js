const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' http://localhost:5000 ws://localhost:5000;"
  );
  next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// React build serve karo
app.use(express.static(path.join(__dirname, "build")));
//Catch-all route (React frontend handle karega)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
})

// Server run
app.listen(PORT, () => {
  console.log('Server running on port 5000 ${PORT}');
});