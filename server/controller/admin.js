const mongoose = require("mongoose");
const Admin = require("../model/admin/");

exports.newAdmin = async (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const existingAdmin = await Admin.find({Email : req.user.email});
        if(existingAdmin) {
          res.send(existingAdmin)
        }
        else{ 
          const admin = new Admin({
            Username: req.user.user_id,
            Name : req.user.name,
            NGO: req.body.NGO,
            Email:req.user.email,
            Photo:req.user.picture
          });
          admin.save().then((data) => {
              res.send(data)
          });
        } 
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


exports.getAdmin=(req,res)=>{
  Admin.findById({_id:req.params.id}).then((data)=>{
  console.log('Success')
      res.send(data)
  })
};