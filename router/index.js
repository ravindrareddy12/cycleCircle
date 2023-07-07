const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController')
const warehouseController = require('../Controller/warehoseController')
const stockController = require('../Controller/stockController')
const stateController = require('../Controller/stateController')
const orderController = require('../Controller/ordersController');

router.post('/products',productController.Product);
router.get('/products',productController.products);

router.post('/warehouses',warehouseController.Warehouse);
router.get('/warehouses',warehouseController.allWarehouses);
router.get('/warehouses/:warehouseId',warehouseController.WarehousesById);


router.post('/stocks',stockController.stock);

router.post('/states',stateController.states);
router.get('/state',stateController.state);

router.post('/orders',orderController.orders)

module.exports = router;