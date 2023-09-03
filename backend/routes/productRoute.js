const express=require('express');
const { getAllproducts, createProduct, updateProducts, deleteProduct } = require('../controllers/productController');
const router=express.Router();


router.route("/products").get(getAllproducts);
router.route("/products/new").post(createProduct);
router.route("/products/:id").put(updateProducts).delete(deleteProduct);

module.exports=router