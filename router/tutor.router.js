const express = require('express');
const router = express.Router();
const tutorController = require("../controller/tutorController");

/**
 * @swagger
 * /api/v1/tutors/register:
 *   post:
 *     tags:
 *      - "Tutor"
 *     description: Create a new tutor account
 *     parameters:
 *      - name: name
 *        description: Name of tutor
 *        in: formData
 *        required: true
 *        type: string
 *      - name: bithDay
 *        description: Birthday of tutor
 *        in: formData
 *        required: true
 *        type: string
 *      - name: phone
 *        description: Phone number of tutor
 *        in: formData
 *        required: true
 *        type: string
 *      - name: email
 *        description: Email of Tutor
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: Tutor's Password Account
 *        in: formData
 *        required: true
 *        type: string
 *      - name: address
 *        description: Tutor's Address
 *        in: formData
 *        required: true
 *        type: string
 *      - name: skill
 *        description: Tutor's Skill
 *        in: formData
 *        required: true
 *        type: string
 *      - name: education
 *        description: Tutor's Education
 *        in: formData
 *        required: true
 *        type: string
 *      - name: gpa
 *        description: Tutor's GPA
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Create New Tutors Success, status are pending!
 */

router.post('/register',tutorController.registerTutors);

/**
 * @swagger
 * /api/v1/tutors/login:
 *   post:
 *     tags:
 *      - "Tutor"
 *     description: Create a new tutor account
 *     parameters:
 *      - name: email
 *        description: Email login of tutor
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: Tutor's Password Account
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Login successfully!
 *       401:
 *         description: Tutor's Account is not activated!
 *       400:
 *         description: Username and Password not matched!
 */

router.post('/login',tutorController.loginWithUsername);

/**
 * @swagger
 * /api/v1/tutors/{email}:
 *  get:
 *    tags:
 *    - "Tutor"
 *    summary: "Get Profile of Tutor"
 *    description: "Returns all information about Tutor"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "email"
 *      in: "path"
 *      description: Email of tutor."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Get Tutor's Information Success" 
          
*/

router.get('/:email',tutorController.getTutorProfile);

router.put('/acceptTutor/:idTutor',tutorController.acceptTutor);

/**
 * @swagger
 * /api/v1/tutors/{id}:
 *  put:
 *    tags:
 *    - "Tutor"
 *    summary: "Update Tutor's Information"
 *    description: "Update Tutor's Information"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: ID of tutor."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    - name: name
 *      description: Tutor's name
 *      in: formData
 *      required: true
 *      type: string
 *    - name: education
 *      description: Tutor's education
 *      in: formData
 *      required: true
 *      type: string
 *    - name: skill
 *      description: Tutor's Skill
 *      in: formData
 *      required: true
 *      type: string
 *    - name: avatar
 *      description: Tutor's avatar (Link url)
 *      in: formData
 *      required: true
 *      type: string
 *    responses:
 *      "200":
 *        description: "Update Tutor's Information Success"    
 */

router.put('/:id',tutorController.updateProfile)

/**
 * @swagger
 * /api/v1/tutors:
 *   get:
 *     tags:
 *      - "Tutor"
 *     description: Get All Tutors Pending
 *     responses:
 *       200:
 *         description: Return all tutors pending avalable!
 */

router.get('/',tutorController.getAllTutor);

module.exports = router;