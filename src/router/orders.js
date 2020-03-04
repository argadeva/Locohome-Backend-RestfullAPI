const express = require("express");
const Router = express.Router();
const auth = require("../helpers/auth");

const ordersController = require("../controllers/orders");

Router.get("/", ordersController.getOrders);
Router.get("/:id", auth.verify, ordersController.getOrdersbyId);
Router.post("/order", auth.verify, ordersController.addOrders);
Router.patch("/:id", auth.verify, ordersController.updateOrders);
Router.delete("/:id", auth.verify, ordersController.deleteOrders);
Router.get("/email/:email", auth.verify, ordersController.getOrderByEmail);
Router.patch("/update/:id", ordersController.updatePaymentStatus);
Router.get("/orderstaff/all", ordersController.getOrderStaff);

module.exports = Router;
