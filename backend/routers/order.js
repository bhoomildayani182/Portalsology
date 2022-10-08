const express = require("express");
const auth = require("../src/middleware/auth");
const router = new express.Router();
const orderController = require("../controllers/orderController");

//Create order
router.post("/order", auth, orderController.createOrder);

// Read All order / One order which is logged in
router.get("/order", auth, orderController.readOrder);

//Updating order
router.patch("/order/:id", auth, orderController.updateOrder);

// Deleting an order
router.delete("/order/:id", auth, orderController.deleteOrder);

// confirmed order list
router.get("/order/confirmed", auth, orderController.confirmedOrder);

// pending order list
router.get("/order/pending", auth, orderController.pendingOrder);

module.exports = router;
