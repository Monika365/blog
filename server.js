const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   })
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
require("./app/routes/blog.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});