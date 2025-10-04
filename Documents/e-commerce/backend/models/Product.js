const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    fabric: { type: String, required: true },
    size: { type: String, required: true },
    embroidery: { type: String, required: true },
    stones: { type: String },
    description: { type: String },
    imageUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);