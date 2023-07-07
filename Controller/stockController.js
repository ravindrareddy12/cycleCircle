const Warehouse = require('../models/warehouseSchema')


module.exports.stock = async (req, res) => {
    try {
      const { sku, warehouseId, quantity } = req.body;
      const warehouse = await Warehouse.findOne({ warehouseId });
  
      if (!warehouse) {
        return res.status(404).json({ message: 'Warehouse not found.' });
      }
  
      const skuString = sku.toString(); // Convert the SKU to a string
  
      warehouse.stock.set(skuString, (warehouse.stock.get(skuString) || 0) + quantity);
      await warehouse.save();
  
      res.json({ message: 'Stock added successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  