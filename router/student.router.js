const express = require('express');
const router = express.Router();
const studenController = require("../controller/studentController");
const { route } = require('./lession.router');



router.post("/registerStudent",studenController.registerStudent);

router.post("/login",studenController.LoginStudenWithUsername);

router.get("/getStudentProfile/:idStudent",studenController.getStudentProfile);


module.exports = router;