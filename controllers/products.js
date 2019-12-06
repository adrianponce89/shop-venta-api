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
    if (!product) {
      return res.status(404).json({ message: 'No valid entry for provided productId'})
    }
    res.status(200).json(product);
  },
  updateProduct: async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(productId, { $set: req.body });
    if (!product) {
      return res.status(404).json({ message: 'No valid entry for provided productId'})
    }
    res.status(200).json({ success: true });
  },
  deleteProduct: async (req, res, next) => {
    const { productId } = req.params;
    const products = await Product.deleteOne({ _id: productId});
    if (!product) {
      return res.status(404).json({ message: 'No valid entry for provided productId'})
    }
    res.status(200).json(products);
  },
};
