const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);