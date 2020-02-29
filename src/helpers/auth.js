require('dotenv').config();

const jwt = require('jsonwebtoken');
module.exports = {
    verify: (req,res,next) =>{
        token = req.headers['x-access-token'];
        console.log(token)
        try {
            var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            console.log(decoded)
            next();
          } catch(err) {
              console.log(err)
              res.json({
                  msg: 'token invalid'
              })
          }
    }
}