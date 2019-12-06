const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get products',
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body)
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(200).json({
    message: 'Product was created',
    product
  });
});

router.get('/:productId', (req, res, next) => {
  const { productId } = req.params;
  res.status(200).json({
    message: 'Get product',
    productId,
  });
});

router.patch('/:productId', (req, res, next) => {
  const { productId } = req.params;
  res.status(200).json({
    message: 'Update product',
    productId,
  });
});

router.delete('/:productId', (req, res, next) => {
  const { productId } = req.params;
  res.status(200).json({
    message: 'Delete product',
    productId,
  });
});

module.exports = router;
