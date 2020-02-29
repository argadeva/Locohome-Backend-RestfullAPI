const Express = require("express");
const Multer = require("multer");

const Router = Express.Router();
const RoomController = require("../controllers/room");

Router.get("/", RoomController.getRoom)
  .delete("/delete/:id", RoomController.deleteRoom)
  .post("/insert", RoomController.isertRoom)
  .put("/update/:id", RoomController.updateRoom);

module.exports = Router;
