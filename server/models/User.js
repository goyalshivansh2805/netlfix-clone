const {model , Schema}  = require('mongoose');

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    }
    
},{
    timestamps:true
});


module.exports = model('User',userSchema);