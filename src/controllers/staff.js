const staffModel = require("../models/staff");
require("dotenv").config();

const miscHelper = require("../helpers/helper");

const nodemailer = require("nodemailer");
const Nexmo = require("nexmo");
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
      token:token
    }
    staffModel
      .registerStaff(data)
      .then(result => {
        // res.json(result);
      
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
            text: `Please click this link to verification http://localhost:4003/api/v1/Staff/verification/${token}`
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
        console.log("akun verify");
      });
  
  },

  updateStaff: (req, res) => {
    const id_Staff = req.params.id_staff;
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    };
    staffModel
      .updateStaff(id_Staff, data)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  deleteStaff: (req, res) => {
    const id_Staff = req.params.id_staff;
    staffModel
      .deleteStaff(id_Staff)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },

  loginStaff: (req, res) => {
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
      .loginStaff(email, password, token)
      .then(result => {
        console.log(result.length);
        // res.json(result);
        if (result.length !== 0) {
            res.json({
                token : token
              });
        } else {
          res.json({
            message: "user tidak ditemukan",
            token : token
          });
        }
      })
      .catch(err => console.log(err));
  },
  forgetPasswordStaff: (req, res) => {
    const email = req.body.email;
    console.log(email)
    var token = jwt.sign(
        { email: email},
        process.env.PRIVATE_KEY
      );
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
                  user: "handika.yulma@gmail.com",
                  pass: "handika1"
                }
              });
    
              var mailOptions = {
                from: '"LocoHome" <handika.yulma@gmail.com>',
                to: `${email}`,
                subject: "Set New Password",
                text: `Please click this link to verification http://localhost:4003/api/v1/Staff/forgetPassword/${token}`
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
      token=req.params.token
   password=req.body.password
    staffModel
      .setPasswordStaff(password, token)
      .then(result => {
        console.log(result.length);
        if (result.length !== 0) {
         
              res.json({msg: "set new password"  });
              
        } else {
          res.json({
            message: "user tidak ditemukan"
          });
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
        res.json(true);
      })
      .catch(err =>  res.json(false));
  },
};
