const express = require('express');
const router = express.Router();
const studenController = require("../controller/studentController");
const { route } = require('./lession.router');

/**
 * @swagger
 * /api/v1/students/create:
 *   post:
 *     tags:
 *      - "Student"
 *     Student: Create New Student
 *     parameters:
 *      - name: email
 *        description: Email of new Student
 *        in: formData
 *        required: true
 *        type: string
 *      - name: passwords
 *        description: Password of new Student
 *        in: formData
 *        required: true
 *        type: string
 *      - name: name
 *        description: Student's name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: address
 *        description: Student's address
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       202:
 *         description: Create Admin Success!
 */

router.post("/register",studenController.registerStudent);

/**
 * @swagger
 * /api/v1/students/login:
 *   post:
 *     tags:
 *      - "Student"
 *     Student: Login Student Account
 *     parameters:
 *      - name: email
 *        description: Email of new Student
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: Password of new Student
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       202:
 *         description: Login Success!
 *       400:
 *         description: Login Failed!
 */

router.post("/login",studenController.LoginStudenWithUsername);

/**
 * @swagger
 * /api/v1/students/{idStudent}:
 *  get:
 *    tags:
 *    - "Student"
 *    summary: "Get Profile Of Student"
 *    description: "Returns all information of that student"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "idStudent"
 *      in: "path"
 *      description: "ID of student to return all informations"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Get Student's Profile Succeed" 
        "400":
 *        description: "No Student existed!"
*/

router.get("/:idStudent",studenController.getStudentProfile);


module.exports = router;