const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }, // hashed password optional
});

module.exports = mongoose.model("Admin", adminSchema);