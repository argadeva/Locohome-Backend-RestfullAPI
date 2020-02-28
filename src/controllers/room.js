const RoomModel = require('../models/Room');
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