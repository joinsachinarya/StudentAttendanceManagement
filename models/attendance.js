const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Attendance = sequelize.define("attendance", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("present", "absent"),
    allowNull: false,
  },
});

module.exports = Attendance;
