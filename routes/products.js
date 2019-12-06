const router = require('express-promise-router')();

const ProductController = require('../controllers/products');

router.route('/')
	.get(ProductController.getProducts)
	.post(ProductController.newProduct)

router.route('/:productId')
	.get(ProductController.getProduct)
	.put(ProductController.updateProduct)
	.patch(ProductController.updateProduct)
  .delete(ProductController.deleteProduct)

module.exports = router;
