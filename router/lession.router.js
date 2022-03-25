const express = require("express");
const lessionRouter = express.Router();
const lessionController = require("../controller/lessionController");

/**
 * @swagger
 * /api/v1/lessions/{course}:
 *   post:
 *     tags:
 *      - "Lesson"
 *     summary: Create a lesson of the course
 *     parameters:
 *      - name: student
 *        description: Student study in that lesson.
 *        in: formData
 *        required: true
 *        type: string
 *      - name: linkMeet
 *        description: Link to join lession.
 *        in: formData
 *        required: true
 *        type: string
 *      - name: timeStart
 *        description: Time lesson start.
 *        in: formData
 *        required: true
 *        type: string
 *      - name: timeEnd
 *        description: Time lession end.
 *        in: formData
 *        required: true
 *        type: string
 *      - name: date
 *        description: Date of lesson.
 *        in: formData
 *        required: true
 *        type: string
 *      - name: description
 *        description: Description of that lesson..
 *        in: formData
 *        required: true
 *        type: string
 *      - name: "course"
 *        in: "path"
 *        description: "The lesson inside which course."
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       200:
 *         description: Add lesson successfully!
 */

lessionRouter.post("/:course",lessionController.addLession);

/**
 * @swagger
 * /api/v1/lessions/{course}:
 *   get:
 *     tags:
 *      - "Lesson"
 *     summary: Load all lession inside Course
 *     parameters:
 *      - name: "course"
 *        in: "path"
 *        description: "ID Course"
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       200:
 *         description: Return all lesson of that course.
 */

lessionRouter.get("/:course",lessionController.getAllLession);

/**
 * @swagger
 * /api/v1/lessions/detail/{id}:
 *   get:
 *     tags:
 *      - "Lesson"
 *     description: Load all details inside lesson.
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "Lesson ID."
 *        required: true
 *        type: "integer"
 *        format: "int64"
 *     responses:
 *       200:
 *         description: Return all lesson of that course.
 */

lessionRouter.get("/detail/:id",lessionController.getDetailLession);




module.exports = lessionRouter;