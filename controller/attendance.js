const Attendance = require("../models/attendance");
const Student = require("../models/student");

exports.markAttendance = (req, res, next) => {
  const { peter, rocket, eleven, diana, lucy, wednesday, bruce, clark, date } =
    req.body;

  const body = {
    peter,
    rocket,
    eleven,
    diana,
    lucy,
    wednesday,
    bruce,
    clark,
    date,
  };

  Attendance.create(body)
    .then((result) => {
      console.log("Attendance marked");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .sendStatus(500)
        .json({ Error: "Error occured while marking the attendance" });
    });
};
exports.fetchAttendanceByDate = (req, res, next) => {
  // let requiredDate = req.date;
  Attendance.findByPk(1)
    .then((result) => {
      let peterPresents = 0;
      let rocketPresents = 0;
      let elevenPresents = 0;
      let dianaPresents = 0;
      let lucyPresents = 0;
      let wednesdayPresents = 0;
      let brucePresents = 0;
      let clarkPresents = 0;
      // result.forEach((element) => {
      //   if (element.dataValues.peter === "present") {
      //     peterPresents = peterPresents + 1;
      //   }
      //   if (element.dataValues.rocket === "present") {
      //     rocketPresents = rocketPresents + 1;
      //   }
      //   if (element.dataValues.eleven === "present") {
      //     elevenPresents = elevenPresents + 1;
      //   }
      //   if (element.dataValues.diana === "present") {
      //     dianaPresents = dianaPresents + 1;
      //   }
      //   if (element.dataValues.lucy === "present") {
      //     lucyPresents = lucyPresents + 1;
      //   }
      //   if (element.dataValues.wednesday === "present") {
      //     wednesdayPresents = wednesdayPresents + 1;
      //   }
      //   if (element.dataValues.bruce === "present") {
      //     brucePresents = brucePresents + 1;
      //   }
      //   if (element.dataValues.clark === "present") {
      //     clarkPresents = clarkPresents + 1;
      //   }
      // });
      // const presentReport = {
      //   peterPresents: peterPresents,
      //   rocketPresents: rocketPresents,
      //   elevenPresents: elevenPresents,
      //   dianaPresents: dianaPresents,
      //   lucyPresents: lucyPresents,
      //   wednesdayPresents: wednesdayPresents,
      //   brucePresents: brucePresents,
      //   clarkPresents: clarkPresents,
      // };
      // const response = {
      //   peter: `${presentReport.peterPresents} / ${dates}`,
      //   rocket: `${presentReport.rocketPresents} /${dates}`,
      //   eleven: `${presentReport.elevenPresents} / ${dates}`,
      //   diana: `${presentReport.dianaPresents} / ${dates}`,
      //   lucy: `${presentReport.lucyPresents} / ${dates}`,
      //   wednesday: `${presentReport.wednesdayPresents} / ${dates}`,
      //   bruce: `${presentReport.brucePresents} / ${dates}`,
      //   clark: `${presentReport.clarkPresents} / ${dates}`,
      // };
      console.log(result.dataValues);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .sendStatus(500)
        .json({ Error: "Error occured while fetching the attendance report" });
    });
};
exports.fetchAttendanceReport = (req, res, next) => {
  Attendance.findAll()
    .then((result) => {
      let dates = result.length;
      let peterPresents = 0;
      let rocketPresents = 0;
      let elevenPresents = 0;
      let dianaPresents = 0;
      let lucyPresents = 0;
      let wednesdayPresents = 0;
      let brucePresents = 0;
      let clarkPresents = 0;
      result.forEach((element) => {
        if (element.dataValues.peter === "present") {
          peterPresents = peterPresents + 1;
        }
        if (element.dataValues.rocket === "present") {
          rocketPresents = rocketPresents + 1;
        }
        if (element.dataValues.eleven === "present") {
          elevenPresents = elevenPresents + 1;
        }
        if (element.dataValues.diana === "present") {
          dianaPresents = dianaPresents + 1;
        }
        if (element.dataValues.lucy === "present") {
          lucyPresents = lucyPresents + 1;
        }
        if (element.dataValues.wednesday === "present") {
          wednesdayPresents = wednesdayPresents + 1;
        }
        if (element.dataValues.bruce === "present") {
          brucePresents = brucePresents + 1;
        }
        if (element.dataValues.clark === "present") {
          clarkPresents = clarkPresents + 1;
        }
      });
      const presentReport = {
        peterPresents: peterPresents,
        rocketPresents: rocketPresents,
        elevenPresents: elevenPresents,
        dianaPresents: dianaPresents,
        lucyPresents: lucyPresents,
        wednesdayPresents: wednesdayPresents,
        brucePresents: brucePresents,
        clarkPresents: clarkPresents,
      };
      const response = {
        peter: `${presentReport.peterPresents} / ${dates}`,
        rocket: `${presentReport.rocketPresents} /${dates}`,
        eleven: `${presentReport.elevenPresents} / ${dates}`,
        diana: `${presentReport.dianaPresents} / ${dates}`,
        lucy: `${presentReport.lucyPresents} / ${dates}`,
        wednesday: `${presentReport.wednesdayPresents} / ${dates}`,
        bruce: `${presentReport.brucePresents} / ${dates}`,
        clark: `${presentReport.clarkPresents} / ${dates}`,
      };
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res
        .sendStatus(500)
        .json({ Error: "Error occured while fetching the attendance report" });
    });
};
