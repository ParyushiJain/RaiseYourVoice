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
    }
},
{
    collection : 'Complaint'
})

const Complaint = Mongoose.model("Complaint", ComplaintModel);

module.exports = Complaint;