const express = require("express");
const router = express.Router();

const Admin = require("../controller/admin.js");
const User = require("../controller/user.js");
const Complaint = require("../controller/complaint.js");


router.post("/api/createAdmin",Admin.newAdmin);
router.post("/api/createUser",User.newUser);
router.post("/api/createComplaint",Complaint.newComplaint);


module.exports = router;