const jwt = require('jsonwebtoken');

module.exports ={
    verify : (req,res, next)=>{
        // console.log(token)
        try{
            token = req.headers.token;
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            console.log(decoded)
            next();
        }catch(err){
            console.log(err)
            res.json({
                messege:'token infalid'
            })
        }
    }
}