const Warehouse = require('../models/warehouseSchema')

module.exports.orders=  async (req, res) => {
    try {
      const { customerId, sku, orderQuantity, customerLocation } = req.body;
      const customerWarehouseDistances = await Warehouse.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: customerLocation,
            },
            distanceField: 'distance',
            spherical: true,
          },
        },
        { $sort: { distance: 1 } },
      ]);
  
      let orderFulfilled = false;
      for (const warehouse of customerWarehouseDistances) {
        if (warehouse.stock.get(sku) >= orderQuantity) {
          warehouse.stock.set(sku, warehouse.stock.get(sku) - orderQuantity);
          await warehouse.save();
          orderFulfilled = true;
          break;
        }
      }
  
      if (orderFulfilled) {
        res.json({ message: 'Order processed successfully.' });
      } else {
        res.status(404).json({ message: 'Out of stock for the requested product.' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };