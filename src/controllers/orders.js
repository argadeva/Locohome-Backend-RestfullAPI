const miscHelper = require("../helpers/message");
const ordersModel = require("../models/orders");
// const moment = require('moment');

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
      idRoom,
      idListRoom,
      dateCheckIn,
      dateCheckOut,
      price,
      paymentStatus
    } = req.body;

    const date1 = new Date(dateCheckIn);
    const date2 = new Date(dateCheckOut);
    const diffTime = Math.abs(date2 - date1 + 1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalPrice = diffDays * price;
    const data = {
      idUser,
      idRoom,
      idListRoom,
      dateCheckIn,
      dateCheckOut,
      totalPrice,
      paymentStatus
    };
    // console.log(dateCheckIn)
    ordersModel
      .addOrders(data)
      .then(result => {
        // console.log(result)
        data["id"] = result.insertId;
        miscHelper.response(res, data, "Success", 200);
      })
      .catch(err => console.log(err));

    // const dd = moment(dateCheckIn)
    // const mm = moment(dateCheckOut)
    // for (var m = moment(dd); m.isBefore(mm); m.add(1, 'days')) {
    //   // console.log(m.format('YYYY-MM-DD'));
    //   const dateBooked = m.format('YYYY-MM-DD')
    //   const input = {idListRoom,dateBooked}
    //   // console.log(input)
    //   ordersModel.addbookedList(input)
    // }
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
  },

  getOrderByEmail: (req, res) => {
    const email = req.params.email;
    ordersModel
      .getOrderByEmail(email)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },

  getOrderStaff: (req, res) => {
    ordersModel
      .getOrderForStaff()
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },

  updatePaymentStatus: (req, res) => {
    const id = req.params.id;
    ordersModel
      .updatePaymentStatus(id)
      .then(result => {
        miscHelper.response(res, result, "Success", 200);
      })
      .catch(err => console.log(err));
  },
};
