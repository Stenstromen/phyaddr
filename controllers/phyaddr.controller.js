const model = require("../models/phyaddr.model");

function sendIndex(req,res) {
    res.render("index.ejs")
}

module.exports = {
    sendIndex,
}