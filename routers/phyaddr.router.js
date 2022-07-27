const express = require("express");

const phyaddrController = require("../controllers/phyaddr.controller");
const phyaddrRouter = express.Router();
const { check, param } = require("express-validator");

phyaddrRouter.get("/", phyaddrController.sendIndex);
phyaddrRouter.get(
  "/:id",
  [
    param("id", "Invalid ID").not().isEmpty(),
    param("id", "Invalid ID").isLength({ max: 2, min: 2 }),
  ],
  phyaddrController.sendLocation
);
phyaddrRouter.get("/realtime/tx", phyaddrController.realTimeTx);
phyaddrRouter.get(
  "/realtime/rx/:id",
  [
    param("id", "Invalid ID").not().isEmpty(),
    param("id", "Invalid ID").isLength({ max: 2, min: 2 }),
  ],
  phyaddrController.realTimeRx
);
phyaddrRouter.post(
  "/",
  [
    check("latitude", "Invalid latitude").not().isEmpty(),
    check("longitude", "Invalid longitude").not().isEmpty(),
  ],
  phyaddrController.saveLocation
);

module.exports = phyaddrRouter;
