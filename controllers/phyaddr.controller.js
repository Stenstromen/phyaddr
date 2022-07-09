const model = require("../models/phyaddr.model");
const urlId = require("../uniqueid/gen.uniqueid");

function sendIndex(req, res) {
  res.render("index.ejs");
}

function sendLocation(req, res) {
  console.log(req.params.id);
  const foundLocation = model.addrDb.find(
    (msg) => msg.urlid === req.params.id
  );
  res.send(foundLocation);
}

function saveLocation(req, res) {
  const response = {
    urlid: urlId(),
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  model.addrDb.push(response);
  console.log(model.addrDb);
  res.send(response);
}

module.exports = {
  sendIndex,
  sendLocation,
  saveLocation,
};
