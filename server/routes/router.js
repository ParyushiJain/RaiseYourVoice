const express = require("express");
const router = express.Router();

const Admin = require("../controller/admin.js");
const User = require("../controller/user.js");
const Complaint = require("../controller/complaint.js");


router.post("/api/createAdmin",Admin.newAdmin);
router.post("/api/createUser",User.newUser);
router.post("/api/createComplaint",Complaint.newComplaint);
router.delete("/api/deleteAdmin/:id",Admin.deleteAdmin);
router.delete("/api/deleteUser/:id",User.deleteUser);
router.delete("/api/deleteComplaint/:id",Complaint.deleteComplaint);
router.get("/api/getUser/:id",User.getUser);

 
module.exports = router;