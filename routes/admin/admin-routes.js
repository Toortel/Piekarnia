const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin-controller");

router.get("/dodaj", adminController.getAddNewProductPage);

router.get("/klienci", adminController.getAllUsersPage);

module.exports = router;
