const { default: mongoose } = require("mongoose");
const { type } = require("os");
const userTicket= new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
password:{type:String,
    required:true,
}
});


module.exports=mongoose.model('Tuser',userTicket)