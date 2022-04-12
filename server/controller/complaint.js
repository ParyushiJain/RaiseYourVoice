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
      VictimAddress: req.body.VictimAddress,
      AbuseType: req.body.AbuseType,
      Relation: req.body.Relation,
      UserId: req.body.UserId,
      AdminId: req.body.AdminId,
      Status:0

    });
    complaint.save().then((data) => {
        res.send(data)
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteComplaint = (req, res) => {
  try {
    Complaint.deleteOne({ _id: req.params.id }).then((data) => {
      console.log("Success");
      res.send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getComplaint = (req, res) => {
  try {
    Complaint.findById({ _id: req.params.id }).then((data) => {
      console.log("Success");
      res.send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllComplaint = (req, res) => {
  try {
    Complaint.find().then((data) => {
      console.log("Success");
      res.send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllComplaintByOne = (req, res) => {
  try {
    Complaint.find({
      "UserId":(req.params.id)
    }).then((data) => {
      console.log("Success");
      res.send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllComplaintForAdmin = (req, res) => {
  try {
    Complaint.find({
      "AdminId":(req.params.id)
    }).then((data) => {
      console.log("Success");
      res.send(data);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateStatus=(req,res)=>{
  try{
       Complaint.findByIdAndUpdate(req.params.id,{Status:req.body.Status}).then((data) => {
        console.log("Success");
        res.send(data);
      });
  }
  catch(err){
    res.status(500).send(err);
  }
};

