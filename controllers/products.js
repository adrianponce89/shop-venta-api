const Product = require('../model/product');

module.exports = {
  getProducts: async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).json(products);
  },
  newProduct: async (req, res, next) => {
    const product = await new Product(req.body).save();
    res.status(201).json(product);
  },
  getProduct: async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  },
  updateProduct: async (req, res, next) => {
    const { productId } = req.params;
    await Product.findByIdAndUpdate(productId, req.body);
    res.status(200).json({ success: true });
  },
  deleteProduct: async (req, res, next) => {
    const { productId } = req.params;
    const products = await Product.deleteOne(productId);
    res.status(200).json(products);
  },
};
