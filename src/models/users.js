require('dotenv')

const connection = require('../config/db')

module.exports={
    registerUsers:(data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO users SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result);
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateUsers: (id_users, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE users SET ? WHERE id = ?",[data, id_users], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    deleteUsers: (id_users) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM users WHERE id=?", id_users, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    loginUsers: (email, password, token) =>{
        return new Promise((resolve, reject) => {
            
           
            connection.query("SELECT * FROM users WHERE email=? AND password = ? AND status = 1", [email, password], (err, result) => {
                if(!err){
                    console.log("yee",token)
                    connection.query(`UPDATE users set token='${token}' where email='${email}'`)
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
        
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
      forgetPasswordUsers: (email,token) => {
        return new Promise((resolve, reject) => {
          connection.query(
            "UPDATE users SET forgotToken=? WHERE email=?",
           [token,email],
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
      setPasswordUsers: (password,token) => {
        return new Promise((resolve, reject) => {
          connection.query(
            "UPDATE users SET password=? WHERE forgotToken=?",
           [password,token],
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
      logoutUsers: (token) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE users SET token = null WHERE token = ?",[ token], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    checkingToken: (token) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT token FROM users WHERE token = ?",[ token], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
      
      
}