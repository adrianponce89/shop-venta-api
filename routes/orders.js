const router = require('express-promise-router')();

const OrderController = require('../controllers/orders');

router.route('/')
	.get(OrderController.getOrders)

router.route('/:productId')
	.post(OrderController.newOrder)

router.route('/:orderId')
	.get(OrderController.getOrder)
  .delete(OrderController.deleteOrder)

module.exports = router;
