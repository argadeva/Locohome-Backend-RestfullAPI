const Express = require('express');
const Multer = require('multer');

const Router = Express.Router();
const listRoomController = require('../controllers/listroom');


Router
.get('/:idRoom', listRoomController.getlistRoom)
.get('/search/:data', listRoomController.searchlistRoom)
.get('/sort/:data', listRoomController.sortRoom)
.get('/pagination/:page', listRoomController.paginationlistRoom)

module.exports = Router;