const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/dbConnection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.json({ res: "Result" });
});

sequelize
  .sync()
  .then(() => {
    console.log("Server is syncing with the database");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
