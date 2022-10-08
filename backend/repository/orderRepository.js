const Order = require("../src/models/order");
// const User = require("../src/models/user");


const createOrder = async (req) => {
  function makeToken(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  console.log("1");
  const order = new Order({
    ...req.body,
    owner: req.user._id,
  });

  try {
    const token = makeToken(20);
    order.token = token;
    await order.save();
    return [201, order];
  } catch (e) {
    return [400, e];
  }
};

const readOrder = async (req, res) => {
  try {
    _id = req.user._id;
    const orders = await Order.find({ owner: _id });
    // const institute = await User.find({}, { _id: 0, name: 1 });
    return [200, orders];
  } catch (e) {
    return [500, e];
  }
};

const updateOrder = async (req, res) => {
  if (req.params.id.length !== 24)
    return [400, { error: "Please Enter valid order id" }];
  try {
    await Order.updateOne(
      {
        _id: req.params.id,
      },
      req.body
    );

    const order = await Order.find({ _id: req.params.id });
    if (!order) return [404, { error: "Order not found" }];
    return [200, order];
  } catch (e) {
    logger.error("Error occurred in order updation");
    return [400, e];
  }
};

const deleteOrder = async (req) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return [404, { error: "Order not found" }];
    return [200, order];
  } catch (e) {
    logger.error("Error occurred in user deletion");
    return [500, e];
  }
};

const confirmedOrder = async (req) => {
  try {
    const order = await Order.find({ confirmed: true });
    if (!order) return [404, { error: "confirmed order list is empty" }];
    return [200, order];
  } catch (e) {
    return [500, e];
  }
};

const pendingOrder = async (req) => {
  try {
    const order = await Order.find();
    console.log(order);
    if (!order) return [404, { error: "pending order list is empty" }];
    return [200, order];
  } catch (e) {
    return [500, e];
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
