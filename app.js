const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/dbConnection");
// const Attendance = require("./models/attendance");
// const Student = require("./models/student");
const attendanceRouter = require("./routes/attendance");
const { errorHandeler } = require("./controller/attendance");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Student.hasMany(Attendance);
// Attendance.belongsTo(Student);

app.use(attendanceRouter);
app.use(errorHandeler);
sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    console.log("Server is syncing with the database");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
