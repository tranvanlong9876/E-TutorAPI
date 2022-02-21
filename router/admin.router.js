const express = require('express');
const router = express.Router();
const adminController = require("../controller/adminController");

router.post('/createAdmin', adminController.createAdmin);
router.get("/",(req,res)=>{
    res.send("Admin router!")
})
module.exports = router;