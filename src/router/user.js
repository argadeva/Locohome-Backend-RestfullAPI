const express = require('express');
// const { checkToken } = require("../auth/token");
const Router = express.Router();
const userController = require('../controllers/users')
Router
.post('/register/:mode' , userController.registerUsers)
.patch('/verification/:token' , userController.verificationUsers)
.patch('/forgetPassword/' , userController.forgetPasswordUsers)
.patch('/forgetPassword/:token' , userController.setPasswordUsers)
.patch('/:id_users', userController.updateUsers)
.delete('/:id_users', userController.deleteUsers)
.post('/login', userController.loginUsers)
.post('/logout/:token', userController.logoutUsers)
.get('/:token', userController.checkingToken), 

module.exports = Router;