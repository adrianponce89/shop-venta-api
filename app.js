const express = require('express');
const app = express();

// importing routes
const products = require('./routes/products');

// routes
app.use('/products', products);

module.exports = app;
