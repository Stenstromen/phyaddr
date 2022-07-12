const model = require("../models/phyaddr.model");
const urlId = require("../uniqueid/gen.uniqueid");

function sendIndex(req, res) {
  res.render("index.ejs");
}

function sendLocation(req, res) {
  const foundLocation = model.addrDb.find((msg) => msg.urlid === req.params.id);
  if (foundLocation) {
    let result = {
      latitude: JSON.parse(foundLocation.latitude),
      longitude: JSON.parse(foundLocation.longitude),
    };
    res.render("share.ejs", {
      latitude: result.latitude,
      longitude: result.longitude,
    });
  } else {
    res.redirect("/")
  }
}

function saveLocation(req, res) {
  const response = {
    urlid: urlId(),
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };
  model.addrDb.push(response);
  res.send(response.urlid);
}

function realTimeTx(req, res) {
    res.render("realtimetx.ejs", {
        urlid:urlId(),
    })
}

function realTimeRx(req, res) {
    const foundLocation = model.addrDb.find((msg) => msg.urlid === req.params.id);
    if (foundLocation) {
      let result = {
        latitude: JSON.parse(foundLocation.latitude),
        longitude: JSON.parse(foundLocation.longitude),
      };
      res.render("realtimerx.ejs", {
        room: req.params.id,
      });
    } else {
      res.redirect("/")
    }
}

module.exports = {
  sendIndex,
  sendLocation,
  saveLocation,
  realTimeTx,
  realTimeRx
};
