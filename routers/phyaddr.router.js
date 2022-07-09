const express = require("express");

const phyaddrController = require("../controllers/phyaddr.controller");
const phyaddrRouter = express.Router();

phyaddrRouter.get("/", phyaddrController.sendIndex);
phyaddrRouter.get("/:id", phyaddrController.sendLocation);
phyaddrRouter.post("/", phyaddrController.saveLocation);

module.exports = phyaddrRouter;