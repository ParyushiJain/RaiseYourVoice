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
  Complaint.deleteOne({_id:req.params.id}).then((data)=>{
      console.log('Success')
      res.send(data)
 })
};
