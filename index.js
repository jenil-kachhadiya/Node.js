const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection.js');
const port = 8080;
// Middleware
app.use(express.json());
app.use("/Books", express.static('Books'));
app.use("/api", require("./routes/book.routes.js"))

connectDB();

app.listen(port, () => {
    console.log("Server running on http://localhost:8080"); 
});