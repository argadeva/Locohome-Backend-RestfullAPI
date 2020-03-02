const Express = require('express');
const auth = require('../helpers/auth')
const Router = Express.Router();
const listRoomController = require("../controllers/listRoom");

Router.get("/:idRoom", listRoomController.getlistRoom)
  .get("/search/:data", listRoomController.searchlistRoom)
  .get("/sort/:data", listRoomController.sortRoom)
  .get("/pagination/:page", listRoomController.paginationlistRoom)
  .delete("/delete/:id", listRoomController.deletelistRoom)
  .post("/insertlistroom", listRoomController.insertlistRoom)
  .put("/updatelistroom/:id", listRoomController.updatelistRoom);

Router
.get('/:idRoom',auth.verify, listRoomController.getlistRoom)
.get('/search/:data',auth.verify, listRoomController.searchlistRoom)
.get('/sort/:data',auth.verify, listRoomController.sortRoom)
.get('/pagination/:page',auth.verify, listRoomController.paginationlistRoom)
.delete('/delete/:id',auth.verify, listRoomController.deletelistRoom)
.post('/insertlistroom',auth.verify, listRoomController.insertlistRoom)
.put('/updatelistroom/:id',auth.verify, listRoomController.updatelistRoom)

module.exports = Router;

