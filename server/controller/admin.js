const mongoose = require("mongoose");
const Admin = require("../model/admin/");

exports.newAdmin = async (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    console.log(req.user.Username)
    const existingAdmin = await Admin.findOne({Username : req.user.uid});
    console.log(existingAdmin)
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
  try{
  Admin.deleteOne({_id:req.params.id}).then((data)=>{
      console.log('Success')
      res.send(data)
 })
}catch (err) {
  res.status(500).send(err);
}
};


exports.getAdmin=(req,res)=>{
  try{
  Admin.findById({_id:req.params.id}).then((data)=>{
console.log('Success')
      res.send(data)
  })
}catch (err) {
  res.status(500).send(err);
}
};

exports.getAllAdmin=(req,res)=>{
  try{
  Admin.find().then((data)=>{
console.log('Success')
      res.send(data)
  })
}catch (err) {
  res.status(500).send(err);
}
};
exports.getAdminbyUid=(req,res)=>{
  Admin.findOne({Username:req.user.user_id}).then((data)=>{
    console.log(req.user.user_id,data)
    if(data) {
      res.send(data)
    }
    else{
      res.send({message:  "Not Found"})
    }
  })
};

exports.getNameAndId=(req,res)=>{
  try{
  Admin.find({}).select(["Name","_id"]).then((data)=>{
      res.send(data)
  })
}catch (err) {
  res.status(500).send(err);
}
};