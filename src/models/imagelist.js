require ('dotenv').config();
const connecting = require('../config/db');

module.exports = {
    getImage: ()=>{
        return new Promise((resolve, reject)=>{
            connecting.query("SELECT * FROM imagelistroom", (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },

    addImage: (data)=>{
        return new Promise((resolve, reject)=>{
            connecting.query("INSERT INTO imagelistroom SET ?",data, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
}