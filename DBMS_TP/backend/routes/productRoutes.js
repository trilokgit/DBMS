const express = require('express');
const router = express.Router();
const { getAllProducts,getProductById } = require('../controller/productController');

// get all prod from db
router.get('/', getAllProducts);


router.get('/:id', getProductById); 

module.exports = router;
