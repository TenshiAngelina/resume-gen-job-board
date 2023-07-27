const path = require("path");
const routes = require('./routes');
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const mysql = require('mysql2');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.listen(3001, () => {
  console.log("running on port 3001")
});