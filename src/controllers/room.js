const RoomModel = require('../models/room');
const miscHelper = require('../helpers/helpers');
const listRoomModel = require("../models/listroom");



module.exports = {
    getRoom: (req, res)=>{
        RoomModel.getRoom()
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },

    deleteRoom: (req, res)=>{
        const id = req.params.id;
        RoomModel.deleteRoom(id)
        .then(result=>{
            result['id']= id
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },

    isertRoom: (req, res)=>{
        const {homeName, phoneNumber, ownerName, provinsi, kotaKabupaten, kecamatan, detailAddress, long, lat} = req.body;
        const data = {homeName, phoneNumber, ownerName, provinsi, kotaKabupaten, kecamatan, detailAddress, long, lat};
        RoomModel.isertRoom(data)
        .then(result=>{
            data['id'] = result.insertId
            miscHelper.response(res, data, 200)
        })
        .catch(err=> console.log(err))
    },

    updateRoom: (req, res)=>{
        const id = req.params.id;
        const {homeName, phoneNumber, ownerName, provinsi, kotaKabupaten, kecamatan, detailAddress, long, lat} = req.body;
        const data = {homeName, phoneNumber, ownerName, provinsi, kotaKabupaten, kecamatan, detailAddress, long, lat};
        RoomModel.updateRoom(data, id)
        .then(result=>{
            data['id'] = id
            miscHelper.response(res, data, 200)
        })
        .catch(err=> console.log(err))
    },

    searchRoom: (req, res)=>{
        const {dateCheckIn,dateCheckOut,data} = req.body;
        listRoomModel.searchlistRoom(data,dateCheckIn,dateCheckOut)
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },

    detailRoom: (req, res)=>{
        const {idRoom} = req.body;
        RoomModel.detailRoom(idRoom)
        .then(result=>{
            miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err))
    },
}