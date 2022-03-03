const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

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
const tutorRouter = require("./router/tutor.router");
const lessionRouter = require("./router/lession.router");


app.use("/admin",adminRouter);
app.use("/news",newsRouter);
app.use("/report",reportRouter);
app.use("/request",requrestRouter);
app.use("/course",courseRouter);
app.use("/tutor",tutorRouter);
app.use("lession",lessionRouter);

app.get('/',(req,res)=>{
    res.send("Hello world!");
})




app.listen(process.env.PORT,()=>{
    console.log("app listten port: " + process.env.PORT);
});
