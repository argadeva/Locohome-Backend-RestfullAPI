const Express = require("express");
const Multer = require("multer");

const Router = Express.Router();
const listRoomController = require("../controllers/listRoom");

Router.get("/:idRoom", listRoomController.getlistRoom)
  .get("/search/:data", listRoomController.searchlistRoom)
  .get("/sort/:data", listRoomController.sortRoom)
  .get("/pagination/:page", listRoomController.paginationlistRoom)
  .delete("/delete/:id", listRoomController.deletelistRoom)
  .post("/insertlistroom", listRoomController.insertlistRoom)
  .put("/updatelistroom/:id", listRoomController.updatelistRoom);

module.exports = Router;
