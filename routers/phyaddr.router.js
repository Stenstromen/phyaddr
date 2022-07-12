const express = require("express");

const phyaddrController = require("../controllers/phyaddr.controller");
const phyaddrRouter = express.Router();

phyaddrRouter.get("/", phyaddrController.sendIndex);
phyaddrRouter.get("/:id", phyaddrController.sendLocation);
phyaddrRouter.get("/realtime/tx", phyaddrController.realTimeTx);
phyaddrRouter.get("/realtime/rx/:id", phyaddrController.realTimeRx);
phyaddrRouter.post("/", phyaddrController.saveLocation);

module.exports = phyaddrRouter;