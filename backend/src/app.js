const express = require("express");
require("./db/mongoose");
require("mongoose");
const userRouter = require("../routers/user");
const authRouter = require("../routers/auth");
const itemsRouter = require("../routers/items");
const orderRouter = require("../routers/order");
const helpers = require("../helpers/helpers");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(
	cors()
)
app.use(userRouter);
app.use(authRouter);
app.use(itemsRouter);
app.use(orderRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  helpers.errorResponse(500, { message: "something went wrong" }, res);
});

module.exports = app;
