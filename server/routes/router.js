const express = require("express");
const router = express.Router();

const Admin = require("../controller/admin.js");
const User = require("../controller/user.js");
const Complaint = require("../controller/complaint.js");
const {decodeToken} = require("../middleware")
router.post("/api/createAdmin",decodeToken,Admin.newAdmin);
router.post("/api/createUser",decodeToken,User.newUser);
router.post("/api/createComplaint",decodeToken,Complaint.newComplaint);
// router.delete("/api/deleteAdmin/:id",Admin.deleteAdmin);
// router.delete("/api/deleteUser/:id",User.deleteUser);
// router.delete("/api/deleteComplaint/:id",Complaint.deleteComplaint);
// router.get("/api/getUser/:id",User.getUser);
router.get("/api/getadminbyUID/",decodeToken,Admin.getAdminbyUid);
router.get("/api/getuserbyUID/",decodeToken,User.getUserbyUid);

// router.get("/api/getAdmin/:id",Admin.getAdmin);
router.get("/api/getComplaint/:id",decodeToken,Complaint.getComplaint);
router.get("/api/getAllComplaint",decodeToken,Complaint.getAllComplaint);
// router.get("/api/getAllUser",User.getAllUser);
// router.get("/api/getAllAdmin",Admin.getAllAdmin);
router.get("/api/getAllComplaintByOne/:id",decodeToken,Complaint.getAllComplaintByOne);
router.get("/api/getAllComplaintForAdmin/:id",decodeToken,Complaint.getAllComplaintForAdmin);
router.put("/api/updateStatus/:id",decodeToken,Complaint.updateStatus);
router.get("/api/getNameAndId",decodeToken,Admin.getNameAndId);
 

 
module.exports = router;