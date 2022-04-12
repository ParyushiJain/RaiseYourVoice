const mongoose = require("mongoose");
const User = require("../model/user/");

exports.newUser = async (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const existingUser = await User.findOne({Username : req.user.uid});
    if(existingUser) {
        res.send(existingUser)
        console.log("here ")
      }
      else{ 
       console.log("here : " + req.user)
      const user = new User({
      Username: req.user.uid,
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
  User.deleteOne({_id:req.params.id}).then((data)=>{
      console.log('Success')
      res.send(data)
 })
};
exports.getUser=(req,res)=>{
  User.findById({_id:req.params.id}).then((data)=>{
console.log('Success')
      res.send(data)
  })
};
exports.getUserbyUid=(req,res)=>{
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