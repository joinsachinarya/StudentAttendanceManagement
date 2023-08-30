const { Sequelize } = require("sequelize");
const Attendance = require("../models/attendance");
// const Student = require("../models/student");

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
  console.log(body);
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

exports.fetchAttendanceByDate = (req, res, next) => {
  let targetDate = req.params.date;
  console.log(targetDate);

  Attendance.sequelize
    //Writing own sql query in order to avoid the timezone difference between stored record in db and findOne methods default query for this operation
    .query(
      `SELECT id, peter, rocket, eleven, diana, lucy, wednesday, bruce, clark, date, createdAt, updatedAt
      FROM attendances
      WHERE date = :targetDate
      LIMIT 0, 1000`,
      {
        replacements: { targetDate }, // Parameter binding
        type: Sequelize.QueryTypes.SELECT, // Specify the query type
      }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .sendStatus(500)
        .json({ Error: "Error occured while fetching the attendance" });
    });
};

exports.errorHandeler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ Error: "An error occured" });
};
