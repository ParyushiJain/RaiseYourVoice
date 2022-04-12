const express = require("express");
const router = express.Router();

const Admin = require("../controller/admin.js");
const User = require("../controller/user.js");
const Complaint = require("../controller/complaint.js");
const {decodeToken} = require("../middleware")
router.post("/api/createAdmin",decodeToken,Admin.newAdmin);
router.post("/api/createUser",decodeToken,User.newUser);
router.post("/api/createComplaint",Complaint.newComplaint);
router.delete("/api/deleteAdmin/:id",Admin.deleteAdmin);
router.delete("/api/deleteUser/:id",User.deleteUser);
router.delete("/api/deleteComplaint/:id",Complaint.deleteComplaint);
router.get("/api/getUser/:id",User.getUser);

router.get("/api/getAdmin/:id",Admin.getAdmin);
router.get("/api/getComplaint/:id",Complaint.getComplaint);
router.get("/api/getAllComplaint",Complaint.getAllComplaint);
router.get("/api/getAllUser",User.getAllUser);
router.get("/api/getAllAdmin",Admin.getAllAdmin);
router.get("/api/getAllComplaintByOne/:id",Complaint.getAllComplaintByOne);
router.get("/api/getAllComplaintForAdmin/:id",Complaint.getAllComplaintForAdmin);
router.put("/api/updateStatus/:id",Complaint.updateStatus);
 

 
module.exports = router;