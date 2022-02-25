const express = require("express");
const router = express.Router();
const requrestController = require("../controller/requrestController");



router.post('/createRequest',requrestController.addRequest);

router.get('/getRequest/:id',requrestController.getRequrestById);

router.post('/appeptRequest/:id',requrestController.appeptRequest);

router.post('cancelRequest/:id',requrestController.cancelRequest);


module.exports = router;