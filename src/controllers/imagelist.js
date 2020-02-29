const miscHelper = require("../helpers/message");
const ordersModel = require("../models/orders");
const imageModel = require("../models/imagelist");

module.exports = {
  getImagelist: (req, res) => {
    imageModel
      .getImage()
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },

  addImage: (req, res) => {
    const {idRoom} = req.body;
    const data = {
        idRoom,
        image: `http://localhost:1000/upload/${req.file.filename}`,
    }
    imageModel
      .addImage(data)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },

  updateImage: (req, res) => {
    const id = req.params.id
    const {idRoom} = req.body;
    const data = {
        idRoom,
        image: `http://localhost:1000/upload/${req.file.filename}`,
    }
    imageModel.getDetailimage(id)
    .then(result => {
        imageModel
        .updateImage(data, id, result[0].image)
        .then(result => {
          miscHelper.response(res, result, "Success", 200);
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    
  },
};
