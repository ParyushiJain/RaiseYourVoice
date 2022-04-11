const Mongoose = require('mongoose')
const UserModel = new Mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Name : {
        type : String
    },
    Email : {
        type : String,
        required : true,
        unique : true
    } 
},
{
    collection : 'User'
})

const User = Mongoose.model("User", UserModel);

module.exports = User;