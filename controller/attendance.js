const Attendance = require("../models/attendance");

exports.markAttendance = () => {
  Attendance.create()
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.log(err);
      res
        .send(500)
        .json({ Error: "Error occured while marking the attendance" });
    });
};
exports.fetchAttendanceByDate = () => {
  Attendance.findOne()
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.log(err);
      res
        .send(500)
        .json({ Error: "Error occured while fetching the attendance" });
    });
};
exports.fetchAttendanceReport = () => {
  Attendance.findAll()
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      console.log(err);
      res
        .send(500)
        .json({ Error: "Error occured while fetching the attendance report" });
    });
};
