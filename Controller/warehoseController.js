const Warehouse = require('../models/warehouseSchema')

module.exports.Warehouse = async (req, res) => {
    try {
      const warehouse = await Warehouse.create(req.body);
      res.status(201).json(warehouse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports.WarehousesById=  async (req, res) => {
    try {
      const { warehouseId } = req.params;
      const warehouse = await Warehouse.findOne({ warehouseId }).populate('state', 'name');
  
      if (!warehouse) {
        return res.status(404).json({ message: 'Warehouse not found.' });
      }
  
      const availableSKUs = Array.from(warehouse.stock.keys());
      const storageCapacity = warehouse.stockLimit || -1;
  
      res.json({ warehouseId, availableSKUs, storageCapacity });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports.allWarehouses =  async (req, res) => {
    try {
      const warehouses = await Warehouse.find().populate('state', 'name');
      res.json(warehouses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };