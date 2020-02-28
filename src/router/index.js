const express = require("express");
const orders = require("./orders");

const Router = express.Router();

Router.use("/orders", orders);

module.exports = Router;
