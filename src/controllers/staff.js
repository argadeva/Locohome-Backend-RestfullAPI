const staffModel = require("../models/staff");
require("dotenv").config();

// const miscHelper = require("../helpers/helper");

const nodemailer = require("nodemailer");
// const Nexmo = require("nexmo");
var jwt = require("jsonwebtoken");

module.exports = {
  registerStaff: (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

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
      token: token,
      status: 0
    };
    if (data.phoneNumber.slice(0, 1) == 0) {
      data.phoneNumber = data.phoneNumber.replace(0, 62);
    }
    staffModel
      .registerStaff(data)
      .then(result => {
        // res.json(result);

        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "locohome14@gmail.com",
            pass: "arkademy1!"
          }
        });

        var mailOptions = {
          from: '"LocoHome" <locohome14@gmail.com>',
          to: `${data.email}`,
          subject: "Verification your account",
          text: `Please click this link to verification http://18.206.61.46:1000/staff/verification/${token}`
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

    console.log(data.firstName);
  },

  verificationStaff: (req, res) => {
    let token = req.params.token;

    staffModel.verificationStaff(token).then(result => {
      //console.log(result);
      res.json("verify");
    });
  },

  updateStaff: (req, res) => {
    const emailUsers = req.params.email;
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    };
    staffModel
      .updateStaff(emailUsers, data)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  deleteStaff: (req, res) => {
    const email = req.params.email;
    staffModel
      .deleteStaff(email)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },

  loginStaff: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // console.log('bisa')
    let token = jwt.sign(
      { email: email, password: password },
      process.env.PRIVATE_KEY
    );

    staffModel
      .loginStaff(email, password, token)
      .then(result => {
        console.log(result.length);
        if (result.length !== 0) {
          // console.log(token);
          res.json({
            token: token
          });
        } else {
          res.json({
            token: null
          });
        }
      })
      .catch(err => console.log(err));
  },
  forgetPasswordStaff: (req, res) => {
    const email = req.body.email;
    console.log(email);
    var token = jwt.sign({ email: email }, process.env.PRIVATE_KEY);
    res.json({ token: token });
    console.log({
      token: token
    });
    staffModel
      .forgetPasswordStaff(email, token)
      .then(result => {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "locohome14@gmail.com",
            pass: "arkademy1!"
          }
        });

        var mailOptions = {
          from: '"LocoHome" <locohome14@gmail.com>',
          to: `${email}`,
          subject: "Set New Password",
          text: `Please click this link to set new password http://localhost:3000/staff/setNewPassword/${token}`
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
  setPasswordStaff: (req, res) => {
    token = req.params.token;
    password = req.body.password;
    console.log(password);
    staffModel
      .setPasswordStaff(password, token)
      .then(result => {
        console.log(result.length);
        if (result.length !== 0) {
          res.json(true);
        } else {
          res.json(false);
        }
      })
      .catch(err => console.log(err));
  },
  logoutStaff: (req, res) => {
    const token = req.params.token;
    staffModel
      .logoutStaff(token)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  checkingToken: (req, res) => {
    const token = req.params.token;
    staffModel
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
  },
  getStaff: (req, res) => {
    const email = req.params.email;
    staffModel
      .getStaff(email)
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json(false));
  }
};
