const Express = require("express");
const auth = require('../helpers/auth')
const Router = Express.Router();
const RoomController = require("../controllers/room");

Router.get("/",auth.verify, RoomController.getRoom)
  .delete("/delete/:id",auth.verify, RoomController.deleteRoom)
  .post("/insert",auth.verify, RoomController.isertRoom)
  .put("/update/:id",auth.verify, RoomController.updateRoom)
  .get("/search",auth.verify, RoomController.searchRoom)
  .get("/detail",auth.verify, RoomController.detailRoom);

module.exports = Router;
