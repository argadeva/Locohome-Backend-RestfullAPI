const express = require('express');

const Router = express.Router();
const staffController = require('../controllers/staff')
Router
.post('/register/' , staffController.registerStaff)
.patch('/verification/:token' , staffController.verificationStaff)
.patch('/forgetPassword/' , staffController.forgetPasswordStaff)
.patch('/forgetPassword/:token' , staffController.setPasswordStaff)
.patch('/:id_staff', staffController.updateStaff)
.delete('/:id_staff', staffController.deleteStaff)
.post('/login', staffController.loginStaff)
.post('/logout/:token', staffController.logoutStaff)
.get('/:token', staffController.checkingToken),

module.exports = Router;