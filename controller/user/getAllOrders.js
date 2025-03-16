const Order = require("../models/Order");

// Fetch all orders for admin
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("products.productId", "name price");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports =  getAllOrders
  