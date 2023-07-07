const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    imageLink: String,
  });

  const Product = mongoose.model('Product', productSchema);
  module.exports = Product;