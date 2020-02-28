const RoomModel = require('../models/room');
const miscHelper = require('../helpers/helpers');


module.exports = {
    getRoom: (req, res)=>{
        RoomModel.getRoom()
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    }
}