const mongoose = require("mongoose");
const Complaint = require("../model/complaints/");

exports.newComplaint = (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const complaint = new Complaint({
        VictimName: req.body.VictimName,
        AbuserName: req.body.AbuserName,
        VictimContact: req.body.VictimContact,
        VictimAddress:req.body.VictimAddress,
        AbuseType:req.body.AbuseType,
        Relation:req.body.Relation,
    });
    complaint.save().then((data) => {
        res.send(data)
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteComplaint = (req,res) =>{
    User.findOne({Username:req.user.user_id}).then((data)=>{
      if(data) {
        console.log(data)
        res.send(data)
      }
      else{
        res.send({message:  "Not Found"})
      }
    })
};
