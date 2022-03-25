const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(cors());

const port = process.env.PORT || 5000;

// parse application/json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "E-Tutor API",
        description: "Online Tutor Information",
        contact: {
          name: "Tran Van Long"
        },
        servers: ["http://localhost:" + port + "/"]
      }
    },
    // ['.routes/*.js']
    apis: ["index.js", 
           "./router/admin.router.js", 
           "./router/course.router.js", 
           "./router/lession.router.js",
           "./router/news.router.js",
           "./router/request.router.js", 
           "./router/tutor.router.js",
           "./router/student.router.js"]
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




// setup router
const adminRouter = require("./router/admin.router.js")
const studentRouter = require("./router/student.router.js")
const newsRouter = require("./router/news.router.js")
const reportRouter = require("./router/report.router.js")
const requrestRouter = require("./router/request.router.js");
const courseRouter = require("./router/course.router.js");
const tutorRouter = require("./router/tutor.router");
const lessionRouter = require("./router/lession.router");

// Routes


app.use("/api/v1/admins",adminRouter);
app.use("/api/v1/students",studentRouter);
app.use("/api/v1/news",newsRouter);
app.use("/report",reportRouter);
app.use("/api/v1/requests",requrestRouter);
app.use("/api/v1/courses",courseRouter);
app.use("/api/v1/tutors",tutorRouter);
app.use("/api/v1/lessions",lessionRouter);

app.get('/',(req,res)=>{
    res.send("Hello world!");
})




app.listen(port,()=>{
    console.log("app listten port: " + port);
});
