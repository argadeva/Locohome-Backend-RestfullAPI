const connection = require("../config/db");
module.exports = {
  getOrders: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT orders.*, DATE_FORMAT(dateCheckIn, '%m/%d/%Y') as dateCheckIn, DATE_FORMAT(dateCheckOut, '%m/%d/%Y') as dateCheckOut FROM orders",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getOrdersbyId: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT orders.*, DATE_FORMAT(dateCheckIn, '%m/%d/%Y') as dateCheckIn, DATE_FORMAT(dateCheckOut, '%m/%d/%Y') as dateCheckOut FROM orders WHERE idUser = ${id}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  addOrders: data => {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO orders SET ?`, data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  updateOrders: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE orders SET ? WHERE id = ?`,
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  deleteOrders: id => {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM orders WHERE id = ${id}`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
