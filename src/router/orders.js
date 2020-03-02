const express = require("express");
const Router = express.Router();
const auth = require("../helpers/auth");

const ordersController = require("../controllers/orders");

Router.get("/", auth.verify, ordersController.getOrders);
Router.get("/:id", auth.verify, ordersController.getOrdersbyId);
Router.post("/order", auth.verify, ordersController.addOrders);
Router.patch("/:id", auth.verify, ordersController.updateOrders);
Router.delete("/:id", auth.verify, ordersController.deleteOrders);
Router.get("/email/:email", auth.verify, ordersController.getOrderByEmail);

module.exports = Router;
