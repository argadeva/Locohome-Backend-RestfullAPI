require("dotenv").config();
const connecting = require("../config/db");

module.exports = {
  getRoom: () => {
    return new Promise((resolve, reject) => {
      connecting.query("SELECT * FROM room", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  deleteRoom: id => {
    return new Promise((resolve, reject) => {
      connecting.query(`DELETE FROM room WHERE id = ${id}`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  isertRoom: data => {
    return new Promise((resolve, reject) => {
      connecting.query(`INSERT INTO room SET ?`, data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  updateRoom: (data, id) => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `UPDATE room SET ? WHERE id = ?`,
        [data, id],
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

  detailRoom: idRoom => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `SELECT room.id, room.homeName, room.phoneNumber, room.ownerName, room.provinsi, room.kotaKabupaten, room.kecamatan, room.detailAddress, room.long, room.lat, listroom.description, listroom.bedType, listroom.fan, listroom.wardrobe, listroom.toilet, listroom.priceNight, listroom.personInroom, listroom.idGender FROM room INNER JOIN listroom ON room.id=listroom.idRoom WHERE room.id = ?`,
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
  }
};
