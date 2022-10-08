const repo = require("../repository/itemRepository.js");
const helpers = require("../helpers/helpers");
const authSchema = require("../validators/itemValidator.js");

const addItem = async (req, res) => {
  try {
    //Validation
    await authSchema.addItem.validateAsync(req.body);

    //Processing
    const result = await repo.createItem(req.body);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

const readItem = async (req, res) => {
  try {
    //Processing
    const result = await repo.readItems();

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

const updateItem = async (req, res) => {
  try {
    //validation
    await authSchema.updateItem.validateAsync(req.body);

    //Processing
    const result = await repo.updateItem(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

const deleteItem = async (req, res) => {
  try {
    //Processing
    const result = await repo.deleteItem(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

const below20000 = async (req, res) => {
  try {
    //Processing
    const result = await repo.below20000(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

const above20000 = async (req, res) => {
  try {
    //Processing
    const result = await repo.above20000(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

module.exports = {
  addItem,
  updateItem,
  deleteItem,
  readItem,
  above20000,
  below20000,
};
