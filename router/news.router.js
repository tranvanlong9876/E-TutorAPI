const express = require('express');
const router = express.Router();
const newsController  = require("../controller/newsController");


router.get("/getAllNews", newsController.getAllNews);

router.post("/createNews",newsController.createNews);

router.get('/',(req,res)=>{
    res.send("This is news api");
})

module.exports = router;