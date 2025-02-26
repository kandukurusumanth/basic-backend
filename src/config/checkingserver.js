const { success } = require("../utils")

function checkingserver(req,res){
    success.data={
        message:"server is running"
    }
    return res.json(success)
}
module.exports={
    checkingserver
}