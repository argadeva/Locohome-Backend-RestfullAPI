const express = require("express");
const orders = require("./orders");
const room = require("./room");
const listroom = require("./listroom");

const Router = express.Router();

Router.use("/orders", orders);
Router.use("/room", room);
Router.use("/listroom", listroom);

module.exports = Router;
