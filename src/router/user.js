const express = require("express");
const auth = require("../helpers/auth");
const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./upload");
  },

  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== "jpeg") {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  }
  //   limits:{
  //     fileSize: 5024 * 5024
  // }
});

const Router = express.Router();
const userController = require("../controllers/users");

Router.post("/register/:mode", userController.registerUsers)
  .patch("/verification/:token", userController.verificationUsers)
  .patch("/forgetPassword/", userController.forgetPasswordUsers)
  .patch("/forgetPassword/:token", userController.setPasswordUsers)
  .patch("/update/:email",upload.single("image"), auth.verify, userController.updateUsers)
  .delete("/:email", auth.verify, userController.deleteUsers)
  .post("/login", userController.loginUsers)
  .post("/logout/:token", userController.logoutUsers)
  .get("/:token", userController.checkingToken)
  .get("/getusers/:email", auth.verify, userController.getUsers)
  .get("/getimage/:email", userController.getImageUsers)
  // .patch("/updateimage/:email", userController.updateImages);
module.exports = Router;
