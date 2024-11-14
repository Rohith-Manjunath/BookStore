// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const BookRoute = require("./routes/BookRoute");
const dbConnection = require("./config/dbConnection");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173/", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", BookRoute);

dbConnection(process.env.MONGODB_URI);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
