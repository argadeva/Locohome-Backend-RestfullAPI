const Express = require('express');
const Multer = require('multer');

const Router = Express.Router();
const RoomController = require('../controllers/Room');


Router
.get('/', RoomController.getRoom)

module.exports = Router;