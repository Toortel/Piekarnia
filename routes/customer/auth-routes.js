const express = require("express");
const router = express.Router();

const customerController = require("../../controllers/customer-controller");

router.post("/signup", customerController.signUp);

module.exports = router;
