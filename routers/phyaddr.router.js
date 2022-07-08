const express = require("express");

const phyaddrController = require("../controllers/phyaddr.controller");
const phyaddrRouter = express.Router();

phyaddrRouter.get("/", phyaddrController.sendIndex);

module.exports = phyaddrRouter;