const express = require("express")
const adminRoute = require("./adminRoute")
const tutorRoute = require("./tutorRoute")

const router = express.Router();
console.log("Routes file loaded");


router.use("/admin",adminRoute)
router.use("/tutor",tutorRoute)

module.exports=router;