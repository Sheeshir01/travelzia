const express = require('express');
const app = express();

const mangoose = require('mongoose');
const hbs = require('hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes/main");

app.use('/static', express.static('public'));
app.use("", routes);

app.set("view engine", "hbs")
app.set("views", "views")

mangoose.connect("mongodb://localhost/travelzia").then(() => {
    console.log("DB Connected");
}).catch(() => {
    console.log("DB Error");
});

app.listen(4040, () => {
    console.log(`Server running`);
});
