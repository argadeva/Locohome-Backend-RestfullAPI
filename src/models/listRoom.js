require("dotenv").config();
const connecting = require("../config/db");

module.exports = {
  getlistRoom: idRoom => {
    return new Promise((resolve, reject) => {
      connecting.query(
        "SELECT room.id, room.homeName, room.phoneNumber, room.ownerName, room.provinsi, room.kotaKabupaten, room.kecamatan, room.detailAddress, room.long, room.lat, listroom.description, listroom.bedType, listroom.fan, listroom.wardrobe, listroom.toilet, listroom.priceNight, listroom.personInroom, listroom.idGender FROM room INNER JOIN listroom ON room.id=listroom.idRoom WHERE room.id = ?",
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

  searchlistRoom: (data, date) => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `SELECT listroom.*, room.homeName, room.phoneNumber, room.ownerName, room.detailAddress, room.provinsi, room.kotaKabupaten, room.kecamatan, room.kecamatan, room.long, room.lat, GROUP_CONCAT(imagelistroom.image) AS image FROM imagelistroom, listroom INNER JOIN room ON listroom.idRoom = room.id WHERE listroom.id NOT IN (SELECT orders.idListRoom FROM orders WHERE orders.dateCheckIn BETWEEN '${date.dateCheckIn}' AND '${date.dateCheckOut}' OR orders.dateCheckOut BETWEEN '${date.dateCheckIn}' AND '${date.dateCheckOut}' or '${date.dateCheckIn}' BETWEEN orders.dateCheckIn AND orders.dateCheckOut or '${date.dateCheckOut}' BETWEEN orders.dateCheckIn AND orders.dateCheckOut) AND (room.homeName LIKE '%${data}%' OR room.provinsi LIKE '%${data}%' OR room.kotaKabupaten LIKE '%${data}%' OR room.kecamatan LIKE '%${data}%') AND listroom.id = imagelistroom.idRoom GROUP BY listroom.id ORDER BY ${date.sort} ASC`,
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

  sortlistRoom: data => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `SELECT room.homeName, room.provinsi, room.kotaKabupaten, room.kecamatan, room.detailAddress, room.long, room.lat, listroom.description, listroom.bedType, listroom.fan, listroom.wardrobe, listroom.toilet, listroom.priceNight, listroom.personInroom, listroom.idGender FROM room INNER JOIN listroom ON room.id=listroom.idRoom ORDER BY room.${data} ASC`,
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

  countlistRoom: () => {
    return new Promise((resolve, reject) => {
      connecting.query("SELECT COUNT(*) AS id FROM listroom", (err, result) => {
        resolve(result);
      });
    });
  },

  paginationlistRoom: (page, pages) => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `SELECT * FROM listroom LIMIT ${page + ", " + pages}`,
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

  deletelistRoom: id => {
    return new Promise((resolve, reject) => {
      connecting.query(
        `DELETE FROM listroom WHERE id = ${id}`,
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

  insertlistRoom: data => {
    return new Promise((resolve, reject) => {
      connecting.query("INSERT INTO listroom SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },

  updatelistRoom: (data, id) => {
    return new Promise((resolve, reject) => {
      connecting.query(
        "UPDATE listroom SET ? WHERE id= ? ",
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
  }
};
