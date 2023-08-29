const express = require("express");
const attendanceControllers = require("../controller/attendance");

const router = express.Router();

router.get(
  "/fetch-attendance-report",
  attendanceControllers.fetchAttendanceReport
);
router.get(
  "/fetch-attendance-by-date/:date",
  attendanceControllers.fetchAttendanceByDate
);
router.post("/mark-attendance", attendanceControllers.markAttendance);

module.exports = router;
