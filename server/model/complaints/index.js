const Mongoose = require('mongoose')
const ComplaintModel = new Mongoose.Schema({
    VictimName : {
        type : String,
        required : true
    },
    AbuserName : {
        type : String,
        required : true
    },
    VictimContact : {
        type : String
    },
    VictimAddress : {
        type : String
    },
    AbuseType : {
        type : String,
        required : true
    },
    Relation : {
        type : String
    },
    Status:{
        type:Number
        
    },
    UserId:{
        type : Mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
   AdminId:{
    type : Mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"Admin"
   }
},
{
    collection : 'Complaint'
})

const Complaint = Mongoose.model("Complaint", ComplaintModel);

module.exports = Complaint;