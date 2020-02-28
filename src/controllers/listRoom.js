const listroomModel = require('../models/listroom');
const miscHelper = require('../helpers/helpers');

module.exports = {
    getlistRoom: (req, res)=>{
        const idRoom = req.params.idRoom;
        listroomModel.getlistRoom(idRoom)
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },

    searchlistRoom: (req, res)=>{
        const data = req.params.data;
        listroomModel.searchlistRoom(data)
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },

    sortRoom: (req, res)=>{
        const data = req.params.data;
        listroomModel.sortlistRoom(data)
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },
}