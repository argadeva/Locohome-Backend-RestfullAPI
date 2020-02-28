const express = require("express");
const room = require("./room");
const listroom = require("./listroom");

const Router = express.Router();

Router.use("/room", room);
Router.use("/listroom", listroom);

module.exports = Router;
