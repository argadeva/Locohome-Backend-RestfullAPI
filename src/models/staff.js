require("dotenv");

const connection = require("../config/db");

module.exports = {
  registerStaff: data => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO staff SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  updateStaff: (id_staff, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE staff SET ? WHERE id = ?",
        [data, id_staff],
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
  deleteStaff: id_staff => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM staff WHERE id=?",
        id_staff,
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
  loginStaff: (email, password, token) => {
    return new Promise((resolve, reject) => {
      console.log(token);

      connection.query(
        "SELECT * FROM staff WHERE email=? AND password = ? AND status = 1",
        [email, password],
        (err, result) => {
          if (!err) {
            connection.query(
              `UPDATE staff set token='${token}' where email='${email}'`
            );
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  verificationStaff: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE staff SET status=1 where token=?",
        token,
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
  forgetPasswordStaff: (email, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE staff SET forgotToken=? WHERE email=?",
        [token, email],
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
  setPasswordStaff: (password, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE staff SET password=? WHERE forgotToken=?",
        [password, token],
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
  logoutStaff: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE staff SET token = null WHERE token = ?",
        [token],
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
  checkingToken: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT token FROM staff WHERE token = ?",
        [token],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
