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
    },

    deletelistRoom: (id)=>{
        return new Promise((resolve, reject)=>{
            connecting.query(`DELETE FROM room WHERE id = ${id}`, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },

    isertRoom: (data)=>{
        return new Promise((resolve, reject)=>{
            connecting.query(`INSERT INTO room SET ?`, data, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },

    updateRoom: (data, id)=>{
        return new Promise((resolve, reject)=>{
            connecting.query(`UPDATE room SET ? WHERE id = ?`, [data,id], (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }
}