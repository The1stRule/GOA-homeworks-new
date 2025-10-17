const express = require("express");

const { getCars, getCar, addCar, changeCar, deleteCar } = require("../controllers/cars.controller.js");

const carsRouter = express.Router();

carsRouter.get("/", getCars);

carsRouter.get("/:id", getCar);

carsRouter.post("/", express.json(), addCar);

carsRouter.patch("/:id", express.json(), changeCar);

carsRouter.delete("/:id", deleteCar);

module.exports = carsRouter;