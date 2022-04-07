const Mongoose = require('mongoose')
const UserModel = new Mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
    ,
    Name : {
        type : String
    },
    Contact : {
        type : Number,
        required : true
    } 
  
},
{
    collection : 'User'
})

const User = Mongoose.model("User", UserModel);

module.exports = User;