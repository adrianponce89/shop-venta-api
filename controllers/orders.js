const Order = require('../model/order');

module.exports = {
  getOrders: async (req, res, next) => {
    const orders = await Order.find({});
    res.status(200).json(orders);
  },
  newOrder: async (req, res, next) => {
    const order = await new Order(req.body).save();
    res.status(201).json(order);
  },
  getOrder: async (req, res, next) => {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    res.status(200).json(order);
  },
  deleteOrder: async (req, res, next) => {
    const { orderId } = req.params;
    const orders = await Order.deleteOne(orderId);
    res.status(200).json(orders);
  },
};
