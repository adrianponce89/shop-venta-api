const morgan = require('morgan');

const express = require('express');
const app = express();

// importing routes
const products = require('./routes/products');
const orders = require('./routes/orders');

// middlewares
app.use(morgan('dev'));

// routes
app.use('/products', products);
app.use('/orders', orders);

module.exports = app;
