const express = require("express");
const auth = require('../helpers/auth')

const Router = express.Router();
const staffController = require("../controllers/staff");
Router.post("/register/", staffController.registerStaff)
  .patch("/verification/:token", staffController.verificationStaff)
  .patch("/forgetPassword/", staffController.forgetPasswordStaff)
  .patch("/forgetPassword/:token", staffController.setPasswordStaff)
  .patch("/:email",auth.verify, staffController.updateStaff)
  .delete("/:email",auth.verify, staffController.deleteStaff)
  .post("/login", staffController.loginStaff)
  .post("/logout/:token", staffController.logoutStaff)
  .get("/:token", staffController.checkingToken)
  .get("/getstaff/:email",auth.verify, staffController.getStaff),
  (module.exports = Router);
