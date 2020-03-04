require("dotenv");
const fs = require("fs");

const connection = require("../config/db");

module.exports = {
  registerUsers: data => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  updateUsers: (email, data, image) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET ? WHERE email = ?",
        [data, email],
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
  
  updateUsersNoImage: (email, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET ? WHERE email = ?",
        [data, email],
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

  deleteUsers: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM users WHERE email=?",
        email,
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
  loginUsers: (email, password, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email=? AND password = ? AND status = 1",
        [email, password],
        (err, result) => {
          if (!err) {
            connection.query(
              `UPDATE users set token='${token}' where email='${email}'`
            );
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  verificationUsers: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET status=1 where token=?",
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
  forgetPasswordUsers: (email, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET forgotToken=? WHERE email=?",
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
  setPasswordUsers: (password, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET password=? WHERE forgotToken=?",
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
  logoutUsers: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET token = 0 WHERE token = ?",
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
        "SELECT token FROM users WHERE token = ?",
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
  getUsers: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
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

  getImageUser: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM image WHERE email = ?",
        [email],
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
  updateImage: (image,email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE image SET ? WHERE email = ?",
        [image,email],
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
};
