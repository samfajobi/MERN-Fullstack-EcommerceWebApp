const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productController');

// get all products from the DB
router.get('/', getAllProducts );


// get a product by id from the DB
router.get('/:id', getProductById);


module.exports = router;