const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("sequelize");
// import mysql2
const mysql = require('mysql2');
// import dotenv
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.NAME,
  database: process.env.HOST
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
