const express = require("express");
const orders = require("./orders");
const room = require("./room");
const listroom = require("./listroom");
const imagelist = require("./imagelist");
const users = require("./user");
const staff = require("./staff");

const Router = express.Router();

Router.use("/orders", orders);
Router.use("/room", room);
Router.use("/listroom", listroom);
Router.use("/image", imagelist);
Router.use("/users", users);
Router.use("/staff", staff);

module.exports = Router;
