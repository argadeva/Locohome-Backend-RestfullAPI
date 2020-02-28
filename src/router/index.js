const express = require("express");

const room = require("./room");
const listroom = require("./listroom");
const orders = require("./orders");

const Router = express.Router();

Router.use("/room", room);
Router.use("/listroom", listroom);
Router.use("/orders", orders);

module.exports = Router;
