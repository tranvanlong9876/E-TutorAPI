const express = require('express');
const app = express();

// parse application/json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// setup router
const adminRouter = require("./router/admin.router.js")
const newsRouter = require("./router/news.router.js")
const reportRouter = require("./router/report.router.js")
const requrestRouter = require("./router/request.router.js");
const courseRouter = require("./router/course.router.js");

app.use("/admin",adminRouter);
app.use("/news",newsRouter);
app.use("/report",reportRouter);
app.use("/request",requrestRouter);
app.use("/course",courseRouter);

app.get('/',(req,res)=>{
    res.send("Hello world!");
})




app.listen(4001,()=>{
    console.log('app listen port 4001')
});

