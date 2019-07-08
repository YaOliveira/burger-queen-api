const express = require("express");
const app = express();
const db = require('./models/index');


app.listen(500, console.log("servidor rodando"));

app.use(express.json());
app.use("/users", require("./routes/user"));
// app.use('/products', require('./routes/products'));
// app.use('/orderProducts', require('./routes/orderProducts'));

db.sequelize.sync();