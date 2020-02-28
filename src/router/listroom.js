const Express = require('express');
const Multer = require('multer');

const Router = Express.Router();
const listRoomController = require('../controllers/listroom');


Router
.get('/:idRoom', listRoomController.getlistRoom)
.get('/search/:data', listRoomController.searchlistRoom)
.get('/sort/:data', listRoomController.sortRoom)

module.exports = Router;