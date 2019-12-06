const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number,
});

module.exports = mongoose.model('Order', orderSchema);
