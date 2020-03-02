const listroomModel = require("../models/listRoom");
const miscHelper = require("../helpers/helpers");

module.exports = {
  getlistRoom: (req, res) => {
    const idRoom = req.params.idRoom;
    listroomModel
      .getlistRoom(idRoom)
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  
    searchlistRoom: (req, res)=>{
        const data = req.params.data;
        const {dateCheckIn,dateCheckOut} = req.body;
        listroomModel.searchlistRoom(data,dateCheckIn,dateCheckOut)
        .then(results=>{
            miscHelper.response(res, results, 200);
        })
        .catch(err=> console.log(err))
    },

  sortRoom: (req, res) => {
    const data = req.params.data;
    listroomModel
      .sortlistRoom(data)
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },

  paginationlistRoom: (req, res) => {
    const page = req.params.page;
    const pages = 2;
    let offset = page > 1 ? page * pages - pages : 0;
    let totalRec = 0;
    let pageCount = 0;
    listroomModel
      .countlistRoom()
      .then(result => {
        totalRec = result[0].id;
        pageCount = Math.ceil(totalRec / pages);
        listroomModel.paginationlistRoom(offset, pages).then(result => {
          res.json({
            page: parseInt(page),
            offset: offset,
            pages: parseInt(pages),
            total: parseInt(totalRec),
            total_page: parseInt(pageCount),
            next_page: page < pageCount - 1 ? parseInt(page) + 1 : undefined,
            prev_page: page > 1 ? page - 1 : undefined,
            data: result
          });
        });
      })
      .catch(err => console.log(err));
  },

  deletelistRoom: (req, res) => {
    const id = req.params.id;
    listroomModel
      .deletelistRoom(id)
      .then(result => {
        result["id"] = id;
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },


  insertlistRoom: (req,res)=>{
    const {idRoom, description, bedType,fan, wardrobe, toilet, priceNight, personInroom, idGender} = req.body;
    const data = {
        idRoom,
        description,
        bedType,
        fan,
        wardrobe,
        toilet,
        priceNight,
        personInroom,
        idGender,
    }
    listroomModel.insertlistRoom(data)
    .then((result)=>{
        data['id'] = result.insertId
        res.json(data)
    })
    .catch(err=>console.log(err))
},

updatelistRoom: (req,res)=>{
  const id = req.params.id;
  const {idRoom, description, bedType,fan, wardrobe, toilet, priceNight, personInroom, idGender} = req.body;
  const data = {
      idRoom,
      description,
      bedType,
      fan,
      wardrobe,
      toilet,
      priceNight,
      personInroom,
      idGender
    } = req.body;
    const data = {
      idroom,
      description,
      bedType,
      fan,
      wardrobe,
      toilet,
      priceNight,
      personInroom,
      idGender
    };
    listroomModel
      .updatelistRoom(data, id)
      .then(result => {
        data["id"] = id;
        res.json(data);
      })
      .catch(err => console.log(err));
  }
};
