const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalQty: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "Pending" }, // Pending, Shipped, Delivered
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
