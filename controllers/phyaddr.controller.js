const model = require("../models/phyaddr.model");
const urlId = require("../uniqueid/gen.uniqueid");

function sendIndex(req, res) {
  res.render("index.ejs");
}

function sendLocation(req, res) {
  const foundLocation = model.addrDb.find(
    (msg) => msg.urlid === req.params.id
  );
  let result = {
    latitude: JSON.parse(foundLocation.latitude),
    longitude: JSON.parse(foundLocation.longitude)
  }
  res.render("share.ejs", {
    latitude: result.latitude,
    longitude: result.longitude
  })
}

function saveLocation(req, res) {
  const response = {
    urlid: urlId(),
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  model.addrDb.push(response);
  //console.log(model.addrDb);
  res.send(response.urlid);
}

module.exports = {
  sendIndex,
  sendLocation,
  saveLocation,
};
