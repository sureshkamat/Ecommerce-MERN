const express = require("express");
const {
  getAllproducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { isAuthenticatedUser,authorizedRole } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllproducts);
router.route("/products/new").post(isAuthenticatedUser,authorizedRole("admin"), createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser,authorizedRole("admin"), updateProducts)
  .delete(isAuthenticatedUser,authorizedRole("admin"),deleteProduct)
  .get(getSingleProduct);

module.exports = router;
