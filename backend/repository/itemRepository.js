const Item = require("../src/models/item");
const { readUsers } = require("./userRepository");

const createItem = async (data) => {
  const item = new Item(data);

  try {
    await item.save();
    return [201, { item }];
  } catch (e) {
    return [400, e];
  }
};

const updateItem = async (req) => {
  const item = await Item.findOne({ name: req.params.name });
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "price", "qty"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return [400, { error: "Invalid updates!" }];
  }

  try {
    updates.forEach((update) => (item[update] = req.body[update]));
    await item.save();
    return [201, req.item];
  } catch (e) {
    return [400, e];
  }
};

const readItems = async () => {
  try {
    const item = await Item.find();
    return [200, item];
  } catch (e) {
    logger.error("Error occurred during activity reading");
    return [500, e];
  }
};

const deleteItem = async (req) => {
  try {
    await Item.deleteOne({ name: req.params.name });
    return [200, { result: "Item Deleted!!" }];
  } catch (e) {
    return [500, e];
  }
};

const below20000 = async (req) => {
  try {
    const item = await Item.find({ price: { $lt: 20000 } });
    return [200, item];
  } catch (e) {
    return [500, e];
  }
};

const above20000 = async (req) => {
  try {
    const item = await Item.find({ price: { $gte: 20000 } });
    return [200, item];
  } catch (e) {
    return [500, e];
  }
};

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  readItems,
  below20000,
  above20000,
};
