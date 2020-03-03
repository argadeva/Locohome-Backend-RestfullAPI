const express = require("express");
const Router = express.Router();
const multer = require("multer");
const path = require("path");
const auth = require("../helpers/auth");

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

const imageController = require("../controllers/imagelist");

Router.get("/:idRoom", imageController.getImagelist);
Router.post(
  "/addimage",
  auth.verify,
  upload.single("image"),
  imageController.addImage
);
Router.patch(
  "/updateimage/:id",
  auth.verify,
  upload.single("image"),
  imageController.updateImage
);
Router.delete("/deleteimage/:id", auth.verify, imageController.deleteImage);

module.exports = Router;
