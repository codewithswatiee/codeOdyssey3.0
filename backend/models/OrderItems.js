const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image_url: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OrderItem', orderItemSchema);
