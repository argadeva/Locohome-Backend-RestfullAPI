const express = require("express");
const room = require("./Room");

const Router = express.Router();

Router.use("/room", room);

module.exports = Router;
