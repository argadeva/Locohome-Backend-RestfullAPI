const express = require("express");
const auth = require('../helpers/auth')

// const { checkToken } = require("../auth/token");
const Router = express.Router();
const userController = require("../controllers/users");
Router.post("/register/:mode", userController.registerUsers)
  .patch("/verification/:token", userController.verificationUsers)
  .patch("/forgetPassword/", userController.forgetPasswordUsers)
  .patch("/forgetPassword/:token", userController.setPasswordUsers)
  .patch("/:email",auth.verify, userController.updateUsers)
  .delete("/:email",auth.verify, userController.deleteUsers)
  .post("/login", userController.loginUsers)
  .post("/logout/:token", userController.logoutUsers)
  .get("/:token", userController.checkingToken)
  .get("/getusers/:email",auth.verify, userController.getUsers),
  (module.exports = Router);
