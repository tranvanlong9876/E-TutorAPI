const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

/**
 * @swagger
 * /api/v1/courses/:
 *   post:
 *     tags:
 *      - "Course"
 *     description: Create a new course
 *     parameters:
 *      - name: author
 *        description: Name of tutor who upload a course
 *        in: formData
 *        required: true
 *        type: string
 *      - name: name
 *        description: Title of the course
 *        in: formData
 *        required: true
 *        type: string
 *      - name: description
 *        description: Description of the course
 *        in: formData
 *        required: true
 *        type: string
 *      - name: ageLimit
 *        description: The age need to be above to join the course
 *        in: formData
 *        required: true
 *        type: string
 *      - name: price
 *        description: The course's price (VNĐ).
 *        in: formData
 *        required: true
 *        type: string
 * 
 *     responses:
 *       200:
 *         description: Create Course Success!
 */

router.post('/',courseController.addCourse);

/**
 * @swagger
 * /api/v1/courses/:
 *   get:
 *     tags:
 *      - "Course"
 *     description: Get All Course
 *     responses:
 *       200:
 *         description: Return all courses is avalable!
 */

router.get('/',courseController.getALlCourse);

/**
 * @swagger
 * /api/v1/courses/{id}:
 *  get:
 *    tags:
 *    - "Course"
 *    summary: "Find course by Tutor's ID"
 *    description: "Returns all course based on Tutor's ID"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "ID of tutors to return course"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Get Tutor's Course Success" 
          
*/

router.get('/:id',courseController.getCourseWithId);

/**
 * @swagger
 * /api/v1/courses/{id}:
 *  delete:
 *    tags:
 *    - "Course"
 *    summary: "Delete The Selected Course."
 *    description: "Delete The Selected Course Of Tutor."
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "ID of course to delete."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Delete Course Success."  
 */

router.delete('/deleteCourse/:id',courseController.deleteCourse);

/**
 * @swagger
 * /api/v1/courses/student/{idStudent}:
 *  get:
 *    tags:
 *    - "Course"
 *    summary: "Get course that are registered."
 *    description: "Get course that are registered with specific Student."
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "idStudent"
 *      in: "path"
 *      description: "ID of student"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Delete Course Success."  
 */

router.get('/student/:idStudent',courseController.getCourseWithStudent)

module.exports = router;