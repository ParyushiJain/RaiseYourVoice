const mongoose = require("mongoose");
const User = require("../model/user/");

exports.newUser = async (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const existingUser = await User.findOne({Email : req.user.email});
    if(existingUser) {
        res.send(existingUser)
      }
      else{ 
        console.log(req.user)
    const user = new User({
      Username: req.user.user_id,
      Name: req.user.name,
      Email:req.user.email,
      Photo:req.user.picture
    });
    user.save().then((data) => {
        res.send(data)
    })
    }
   } catch (err) {
    res.status(500).send(err);
  }
}

exports.deleteUser = (req,res) =>{
  try{
  User.deleteOne({_id:req.params.id}).then((data)=>{
      console.log('Success')
      res.send(data)
 })
}catch (err) {
  res.status(500).send(err);
}
};

exports.getUser=(req,res)=>{
  try{
  User.findById({_id:req.params.id}).then((data)=>{
console.log('Success')
      res.send(data)
  })
}catch (err) {
  res.status(500).send(err);
}
};

exports.getAllUser=(req,res)=>{
  try{
  User.find().then((data)=>{
console.log('Success')
      res.send(data)
  })
}catch (err) {
  res.status(500).send(err);
}
};
