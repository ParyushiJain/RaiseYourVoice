const mongoose = require("mongoose");
const User = require("../model/user/");

exports.newUser = (req, res) => {
  try {
    if (!req.body) {
      res.send('Invalid Request')
    }
    const user = new User({
      Username: req.body.Username,
      Password: req.body.Password,
      Name: req.body.Name,
      Contact:req.body.Contact,
    });
    user.save().then((data) => {
        res.send(data)
    });
  } catch (err) {
    res.status(500).send(err);
  }
};