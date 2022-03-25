const express = require("express");
const router = express.Router();
const requrestController = require("../controller/requrestController");

/**
 * @swagger
 * /api/v1/requests/:
 *   post:
 *     tags:
 *      - "Request"
 *     summary: "Student Create New Request"
 *     description: Add request from Student.
 *     parameters:
 *      - name: author
 *        description: ID of tutor who upload a course
 *        in: formData
 *        required: true
 *        type: string
 *      - name: student
 *        description: ID of student who register a course
 *        in: formData
 *        required: true
 *        type: string
 *      - name: course
 *        description: ID of the course
 *        in: formData
 *        required: true
 *        type: string 
 *     responses:
 *       200:
 *         description: Create Request Success!
 */

router.post('/',requrestController.addRequest);

/**
 * @swagger
 * /api/v1/requests/{id}:
 *  get:
 *    tags:
 *    - "Request"
 *    summary: "Find request by Tutor ID"
 *    description: "Find request based on status and Tutor's ID"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "ID of tutors"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    - name: status
 *      description: Status request
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      "200":
 *        description: "Show avaible request." 
 */

router.get('/:id',requrestController.getRequrestById);

router.get('/getRequestDone/:id',requrestController.getRequestDone);

/**
 * @swagger
 * /api/v1/requests/{id}:
 *  put:
 *    tags:
 *    - "Request"
 *    summary: "Accept Request"
 *    description: "Tutor Accept Selected Request."
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "ID of request."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Accept request success." 
 */

router.put('/:id',requrestController.acceptRequest);

/**
 * @swagger
 * /api/v1/requests/{id}:
 *  delete:
 *    tags:
 *    - "Request"
 *    summary: "Cancel Request"
 *    description: "Tutor Cancel Selected Request."
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "ID of request."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Request has been cancel." 
 */

router.delete('/:id',requrestController.cancelRequest);

/**
 * @swagger
 * /api/v1/requests/:
 *  put:
 *    tags:
 *    - "Request"
 *    summary: "Done Request"
 *    description: "Tutor select to done request"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "course"
 *      in: "formData"
 *      description: "ID of course to done."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Request has been done successfully." 
 */

router.put("/",requrestController.doneRequest);

/**
 * @swagger
 * /api/v1/requests/course/{idCourse}:
 *  get:
 *    tags:
 *    - "Request"
 *    summary: "Done Request"
 *    description: "Tutor select to done request"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "idCourse"
 *      in: "path"
 *      description: "ID of course to search"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Return all request searched." 
 */

router.get("/course/:idCourse",requrestController.getAllRequestWithCourse);
module.exports = router;