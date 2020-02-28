const miscHelper = require("../helpers/message");
const ordersModel = require("../models/orders");

module.exports = {
  getOrders: (req, res) => {
    ordersModel
      .getOrders()
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },
  getOrdersbyId: (req, res) => {
    const id = req.params.id;
    ordersModel
      .getOrdersbyId(id)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },
  addOrders: (req, res) => {
    const {
      idUser,
      idListRoom,
      dateCheckIn,
      dateCheckOut,
      totalPrice,
      paymentStatus
    } = req.body;
    const data = {
      idUser,
      idListRoom,
      dateCheckIn,
      dateCheckOut,
      totalPrice,
      paymentStatus
    };
    ordersModel
      .addOrders(data)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },
  updateOrders: (req, res) => {
    const {
      idUser,
      idListRoom,
      dateCheckIn,
      dateCheckOut,
      totalPrice,
      paymentStatus
    } = req.body;
    const data = {
      idUser,
      idListRoom,
      dateCheckIn,
      dateCheckOut,
      totalPrice,
      paymentStatus
    };
    const id = req.params.id;
    ordersModel
      .updateOrders(data, id)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },
  deleteOrders: (req, res) => {
    const id = req.params.id;
    ordersModel
      .deleteOrders(id)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  }
};
