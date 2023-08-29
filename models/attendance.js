const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Attendance = sequelize.define("attendance", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW(),
  },
  status: {
    type: DataTypes.ENUM("present", "absent"),
    allowNull: false,
  },
});

module.exports = Attendance;
