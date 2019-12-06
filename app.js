const express = require('express');
const app = express();

// importing routes
const products = require('./routes/products');
const orders = require('./routes/orders');

// routes
app.use('/products', products);
app.use('/orders', orders);

module.exports = app;
