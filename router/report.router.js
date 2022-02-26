const express = require('express');
const router = express.Router();
const reportController  = require("../controller/reportController");


router.get("/getAllReport", reportController.getAllReport);

router.post("/createReport",reportController.createReport);



module.exports = router;