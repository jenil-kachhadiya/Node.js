const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection.js');
const port = 5500;
// Middleware
app.use(express.json());
app.use("/uploads", express.static('uploads'));
app.use("/api", require("./routes/book.routes.js"))

connectDB();

app.listen(port, () => {
    console.log("Server running on http://localhost:5500"); 
});