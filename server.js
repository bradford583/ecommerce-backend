const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");
// import mysql2
const mysql = require('mysql2');
// import dotenv
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3001;

// const sequelize = new Sequelize({
//   host: 'localhost',
//   user: process.env.NAME,
//   password: process.env.PW,
//   database: process.env.HOST,
//   dialect: 'mysql'
// });

// const sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PW, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
