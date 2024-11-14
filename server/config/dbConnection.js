const mongoose = require("mongoose");

// MongoDB connection
const dbConnection = (URI) => {
  mongoose
    .connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = dbConnection;
