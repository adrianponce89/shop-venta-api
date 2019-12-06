const Order = require('../model/order');
const Product = require('../model/product');

module.exports = {
  getOrders: async (req, res, next) => {
    const orders = await Order.find({});
    res.status(200).json(orders);
  },
  newOrder: async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    const newOrder = new Order(req.body);
    newOrder.product = product;
    const order = await newOrder.save();
    res.status(201).json(order);
  },
  getOrder: async (req, res, next) => {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    res.status(200).json(order);
  },
  deleteOrder: async (req, res, next) => {
    const { orderId } = req.params;
    const orders = await Order.deleteOne({ _id: orderId});
    res.status(200).json(orders);
  },
};
