const Attendance = require("../models/attendance");
const Student = require("../models/student");

exports.markAttendance = (req, res, next) => {
  const {} = req.body;
  const body = {};
  console.log("reqbody", req.body);
  res.json({ success: "created" });
  // Attendance.create()
  //   .then((res) => {
  //     res.json();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res
  //       .send(500)
  //       .json({ Error: "Error occured while marking the attendance" });
  //   });
};
exports.fetchAttendanceByDate = (req, res, next) => {
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
exports.fetchAttendanceReport = (req, res, next) => {
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
