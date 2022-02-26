const express = require("express");
const router = express.Router();
const requrestController = require("../controller/requrestController");



router.post('/createRequest',requrestController.addRequest);

router.get('/getRequest/:id',requrestController.getRequrestById);

router.get('/getRequestDone/:id',requrestController.getRequestDone);

router.post('/acceptRequest/:id',requrestController.acceptRequest);

router.post('/cancelRequest/:id',requrestController.cancelRequest);

router.post("/doneRequest/:id",requrestController.doneRequest);

router.get("/getAllRequestWithCourse/:idCourse",requrestController.getAllRequestWithCourse);
module.exports = router;