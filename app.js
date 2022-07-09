const express = require("express");
const bodyParser = require("body-parser");

const compression = require("compression");
const ejs = require("ejs");
const app = express();
const phyaddrRouter = require("./routers/phyaddr.router");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(compression());
app.use(phyaddrRouter);

app.listen(8080, () => {
    console.log("Server listening on localhost:8080")
})