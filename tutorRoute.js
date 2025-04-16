const express = require("express")
const tutorController = require("../controllers/tutorController")

const router = express.Router()

router.post("/signup",tutorController.signup)
router.post("/login",tutorController.login)
router.post("/markAttedance",tutorController.MarkAttendance)
router.post("/addStudent",tutorController.createStudent)
router.post("/markStudentAttendance",tutorController.StudentAttendance)
router.get("/attendaceOfAllStudents",tutorController.attedanceOfAllStudents)
router.get("/attendanceHistoryOfStudent",tutorController.attedanceHistoryOfStudent)
// router.post("/attendance",tutor_ctrl.attendence)

// router.post("/register",tutor_ctrl.register)


module.exports = router