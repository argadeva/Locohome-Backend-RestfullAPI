const usersModel = require("../models/users");
require("dotenv").config();

//const miscHelper = require("../helpers/helper");

const nodemailer = require("nodemailer");
const Nexmo = require("nexmo");
var jwt = require("jsonwebtoken");

module.exports = {
  registerUsers: (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const mode = req.params.mode;
    var token = jwt.sign(
      { email: email, password: password },
      process.env.PRIVATE_KEY
    );

    console.log({
      token: token
    });
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      token: token
    };
    let OTP = Math.floor(Math.random() * 9999 + 1);
    usersModel
      .registerUsers(data)
      .then(result => {
        // res.json(result);
        if (mode == 1) {
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "handika.yulma@gmail.com",
              pass: "handika1"
            }
          });

          var mailOptions = {
            from: '"LocoHome" <handika.yulma@gmail.com>',
            to: `${data.email}`,
            subject: "Verification your account",
            text: `Please click this link to verification http://localhost:3000/users/verification/${token}`
            
          };
          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
          res.json({ token: token });
        } else {
          const nexmo = new Nexmo({
            apiKey: "38dbca3c",
            apiSecret: "6MRElTg2x8wDvNUO"
          });

          const from = "LocoHome";
          const to = `${data.phoneNumber}`;
          const text = `Please input OTP number for verify ${OTP}`;

          nexmo.message.sendSms(from, to, text);
          res.json({ OTP: OTP, token: token }); //OTP disamain dulu dengan asycstorage, jika sama diteruskan ke http://localhost:8082/api/v1/verification/:email
        }
      })

      .catch(err => console.log(err));

    console.log(data.firstName);
  },

  verificationUsers: (req, res) => {
    let token = req.params.token;

    usersModel.verificationUsers(token).then(result => {
      console.log("akun verify");
    });
  },

  updateUsers: (req, res) => {
    const id_users = req.params.id_users;
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    };
    usersModel
      .updateUsers(id_users, data)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  deleteUsers: (req, res) => {
    const id_users = req.params.id_users;
    usersModel
      .deleteUsers(id_users)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  loginUsers: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // console.log('bisa')
    var token = jwt.sign(
      { email: email, password: password },
      process.env.PRIVATE_KEY
    );
    console.log({
      token: token
    });

    usersModel
      .loginUsers(email, password, token)
      .then(result => {
        console.log(result.length);
        // res.json(result);
        if (result.length !== 0) {
          res.json({
            token: token
          });
        } else {
          res.json({
            message: "user tidak ditemukan",
            token: token
          });
        }
      })
      .catch(err => console.log(err));
  },
  forgetPasswordUsers: (req, res) => {
    const email = req.body.email;
    console.log(email);
    var token = jwt.sign({ email: email }, process.env.PRIVATE_KEY);
    res.json({ token: token });
    console.log({
      token: token
    });
    usersModel
      .forgetPasswordUsers(email, token)
      .then(result => {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "handika.yulma@gmail.com",
            pass: "handika1"
          }
        });

        var mailOptions = {
          from: '"LocoHome" <handika.yulma@gmail.com>',
          to: `${email}`,
          subject: "Set New Password",
          text: `Please click this link to set new password http://localhost:3000/users/setNewPassword/${token}`
        };
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        res.json({ token: token });
      })
      .catch(err => console.log(err));
  },
  setPasswordUsers: (req, res) => {
    token = req.params.token;
    password = req.body.password;
    usersModel
      .setPasswordUsers(password, token)
      .then(result => {
        console.log(result.length);
        if (result.length !== 0) {
          res.json({ msg: "set new password" });
        } else {
          res.json({
            message: "user tidak ditemukan"
          });
        }
      })
      .catch(err => console.log(err));
  },
  logoutUsers: (req, res) => {
    const token = req.params.token;
    usersModel
      .logoutUsers(token)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  checkingToken: (req, res) => {
    const token = req.params.token;
    usersModel
      .checkingToken(token)
      .then(result => {
        console.log(result.length);
        if (result.length === 0) {
          res.json(false);
        } else {
          res.json(true);
        }
      })
      .catch(err => res.json(false));
  }
};
