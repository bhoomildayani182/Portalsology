joi = require("joi");

const addItem = joi.object({
  name: joi.string().min(3).max(20),

  price: joi.number(),

  id: joi.string().min(3)
});

const updateItem = joi.object({
  name: joi.string().min(3).max(20),

  price: joi.number(),

  qty: joi.number().integer(),
});

module.exports = {
  addItem,
  updateItem,
};
