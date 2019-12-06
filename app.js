const morgan = require('morgan');

const express = require('express');
const app = express();

// importing routes
const products = require('./routes/products');
const orders = require('./routes/orders');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extendent: false }));
app.use(express.json());

// routes
app.use('/products', products);
app.use('/orders', orders);

// catch 404 Errors and Forward them to Error Handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handler Function
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		error: {
			message: err.message
		}
	});
});

module.exports = app;
