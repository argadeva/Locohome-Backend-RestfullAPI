const express = require("express");
const room = require("./room");
const listroom = require("./listroom");
const oreders = require('./orders');
const imagelist = require('./imagelist');

const Router = express.Router();

Router.use("/room", room);
Router.use("/listroom", listroom);
Router.use("/orders", oreders);
Router.use("/image", imagelist);

module.exports = Router;
