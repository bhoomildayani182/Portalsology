const repo = require("../repository/orderRepository");
const helpers = require("../helpers/helpers");

const createOrder = async (req, res) => {
  try {
    console.log("1");
    //Processing
    const result = await repo.createOrder(req);
    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error, res);
  }
};

const readOrder = async (req, res) => {
  try {
    //Processing
    const result = await repo.readOrder(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error.details[0].message, res);
  }
};

const updateOrder = async (req, res) => {
  try {
    //Processing
    const result = await repo.updateOrder(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error, res);
  }
};

const deleteOrder = async (req, res) => {
  try {
    //Processing
    const result = await repo.deleteOrder(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error, res);
  }
};

const confirmedOrder = async (req, res) => {
  try {
    //Processing
    const result = await repo.confirmedOrder(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error, res);
  }
};

const pendingOrder = async (req, res) => {
  try {
    //Processing
    const result = await repo.confirmedOrder(req);

    // Sending Response
    helpers.successResponse(result[0], result[1], res);
  } catch (error) {
    helpers.errorResponse(403, error, res);
  }
};

module.exports = {
  createOrder,
  readOrder,
  updateOrder,
  deleteOrder,
  confirmedOrder,
  pendingOrder,
};
