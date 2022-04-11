const Mongoose = require('mongoose')
const AdminModel = new Mongoose.Schema({
    Username : {
        type : String,
    },
    NGO : {
        type : String
    },
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Photo : {
        type : String
    },
    Name : {
        type : String
    }
},
{
    collection : 'Admin'
})

const Admin = Mongoose.model("Admin", AdminModel);

module.exports = Admin;