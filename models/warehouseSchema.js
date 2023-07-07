const mongoose = require('mongoose');
const State = require('./stateSchema');

const warehouseSchema = new mongoose.Schema({
    warehouseId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'State',
    },
    location: {
      type: [Number],
      required: true,
    },
    stockLimit: {
      type: Number,
      default: Infinity,
    },
    stock: {
      type: Map,
      of: Number,
      default: {},
    },
  });
  const Warehouse = mongoose.model('Warehouse', warehouseSchema);

  module.exports = Warehouse;
