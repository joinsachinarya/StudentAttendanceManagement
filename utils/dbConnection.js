const { Sequelize } = require("sequelize");

const dbConfig = {
  database: "attendanceMMDB",
  username: "root",
  password: "Password!@#$",
  host: "localhost",
  dialect: "mysql",
};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

try {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Server is authorized to connect the database");
    })
    .catch((err) => console.error(err));
} catch (error) {
  console.error(error);
}

module.exports = sequelize;
