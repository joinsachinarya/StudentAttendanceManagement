const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnection");

const Attendance = sequelize.define("attendance", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  peter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rocket: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eleven: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diana: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lucy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wednesday: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bruce: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clark: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // status: {
  //   type: DataTypes.ENUM("present", "absent"),
  //   allowNull: false,
  // },
});

module.exports = Attendance;
