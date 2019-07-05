const express = require("express");
const app = express();
const db = require('./models/index')


app.listen(5000, console.log("servidor rodando"));

db.sequelize.sync();