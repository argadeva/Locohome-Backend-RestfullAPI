const Express = require("express");
const auth = require("../helpers/auth");
const Router = Express.Router();
const RoomController = require("../controllers/room");

Router.get("/", auth.verify, RoomController.getRoom);
Router.delete("/delete/:id", auth.verify, RoomController.deleteRoom);
Router.post("/insert", auth.verify, RoomController.isertRoom);
Router.put("/update/:id", auth.verify, RoomController.updateRoom);
Router.get("/search", auth.verify, RoomController.searchRoom);
Router.get("/details", auth.verify, RoomController.detailRoom);

module.exports = Router;
