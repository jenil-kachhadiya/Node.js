const mongoose = require('mongoose');

// DB Connection
const connectDB = async () => {
    mongoose.connect("mongodb+srv://jenil:jenil45@jenil-backend.qwdnoji.mongodb.net/store")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));
}

module.exports = connectDB;