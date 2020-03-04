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
  },

  addbookedList: data => {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO bookedlistroom SET ?`,
        data,
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

  getOrderByEmail: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT orders.*, orders.id as ordersId, DATE_FORMAT(orders.dateCheckIn, '%d-%m-%Y') as dateCheckIn, DATE_FORMAT(orders.dateCheckOut, '%d-%m-%Y') as dateCheckOut, room.*, GROUP_CONCAT(imagelistroom.image) AS image FROM imagelistroom, orders INNER JOIN room ON orders.idRoom = room.id INNER JOIN users ON orders.idUser = users.id WHERE users.email='${email}' AND orders.idListRoom = imagelistroom.idRoom GROUP BY orders.id`,
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

  updatePaymentStatus: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE orders SET paymentStatus  = 1 WHERE id= ${id}`,
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
  getOrderForStaff: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT orders.*, orders.id as idOrder, users.* FROM orders INNER JOIN users ON orders.idUser=users.id`,
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
};
