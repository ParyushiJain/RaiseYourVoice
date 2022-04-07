const mongoose = require("mongoose");
const Admin = require("../model/admin/");

exports.newAdmin = (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const admin = new Admin({
      Username: req.body.Username,
      Password: req.body.Password,
      NGO: req.body.NGO,
      Contact:req.body.Contact,
    });
    admin.save().then((data) => {
        res.send(data)
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteAdmin = (req,res) =>{
  Admin.deleteOne({_id:req.params.id}).then((data)=>{
      console.log('Success')
      res.send(data)
 })
};