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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

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
