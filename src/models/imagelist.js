require("dotenv").config();
const connecting = require("../config/db");
const fs = require("fs");

module.exports = {
  getImage: idRoom => {
    return new Promise((resolve, reject) => {
      connecting.query(
        "SELECT * FROM imagelistroom WHERE idRoom = ?",
        idRoom,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },

  addImage: data => {
    return new Promise((resolve, reject) => {
      connecting.query(
        "INSERT INTO imagelistroom SET ?",
        data,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },

  getDetailimage: id => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `SELECT * FROM imagelistroom WHERE id = ${id}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },

  updateImage: (data, id, image) => {
    return new Promise((resolve, reject) => {
      connecting.query(
        "UPDATE imagelistroom SET ? WHERE id = ?",
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(result);
            const path = image.replace("http://18.206.61.46:1000", ".");
            fs.unlink(path, function(err) {
              if (err) throw err;
              return;
            });
          } else {
            reject(err);
          }
        }
      );
    });
  },

  deleteImage: (id, image) => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `DELETE FROM imagelistroom WHERE id = ${id}`,
        (err, result) => {
          if (!err) {
            resolve(result);
            const path = image.replace("http://18.206.61.46:1000", ".");
            fs.unlink(path, function(err) {
              if (err) throw err;
              return;
            });
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
