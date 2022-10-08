const express = require("express");
const router = new express.Router();

const itemController = require("../controllers/itemController");

const use = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

//Create item
router.post("/items", use(itemController.addItem));

//Read All items / One item which is logged in
router.get("/items", itemController.readItem);

//Updating items
router.patch("/items/:name", itemController.updateItem);

// Deleting an item
router.delete("/items/:name", itemController.deleteItem);

router.get("/items/below20000", itemController.below20000);

router.get("/items/above20000", itemController.above20000);

router.post("items/order/");

module.exports = router;
