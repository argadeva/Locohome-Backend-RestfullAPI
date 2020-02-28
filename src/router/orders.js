const express = require("express");
const Router = express.Router();

const ordersController = require("../controllers/orders");

Router.get("/", ordersController.getOrders);
Router.get("/:id", ordersController.getOrdersbyId);
Router.post("/", ordersController.addOrders);
Router.patch("/:id", ordersController.updateOrders);
Router.delete("/:id", ordersController.deleteOrders);

module.exports = Router;
