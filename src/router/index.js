const express = require("express");
const room = require("./room");
const listroom = require("./listroom");
const oreders = require('./orders');

const Router = express.Router();

Router.use("/room", room);
Router.use("/listroom", listroom);
Router.use("/orders", oreders);

module.exports = Router;
