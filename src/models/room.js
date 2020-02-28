require ('dotenv').config();
const connecting = require('../config/db');

module.exports = {
    getRoom: ()=>{
        return new Promise((resolve, reject)=>{
            connecting.query("SELECT * FROM room", (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
}