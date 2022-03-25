const express = require('express');
const router = express.Router();
const adminController = require("../controller/adminController");

/**
 * @swagger
 * /api/v1/admins/create:
 *   post:
 *     tags:
 *      - "Admin"
 *     description: Create Admin Role
 *     parameters:
 *      - name: email
 *        description: Email of new Admin
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: Password of new Admin role
 *        in: formData
 *        required: true
 *        type: string
 *      - name: address
 *        description: Admin's Address
 *        in: formData
 *        required: true
 *        type: string
 *      - name: phone
 *        description: Admin's Phone Number
 *        in: formData
 *        required: true
 *        type: string
 *      - name: status
 *        description: Account Status
 *        in: formData
 *        required: true
 *        type: string
 * 
 *     responses:
 *       202:
 *         description: Create Admin Success!
 */

router.post('/create', adminController.createAdmin);
router.get("/", (req, res) => {
    res.send("Admin router!")
})

/**
 * @swagger
 * /api/v1/admins/login:
 *   post:
 *     tags:
 *      - "Admin"
 *     description: Login With Admin Role
 *     parameters:
 *      - name: email
 *        description: Email/Username to login
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        description: Password login
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Login Success!
 *       400:
 *         description: Wrong Information!
 */

router.post('/login', adminController.LoginAdminWithUsername);

/**
 * @swagger
 * /api/v1/admins/{idTutor}:
 *  put:
 *    tags:
 *    - "Admin"
 *    summary: "Accept Tutors registration request"
 *    description: "Accept Tutors registration request"
 *    produces:
 *    - "application/xml"
 *    - "application/json"
 *    parameters:
 *    - name: "idTutor"
 *      in: "path"
 *      description: ID of tutor."
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    responses:
 *      "200":
 *        description: "Get Tutor's Information Success"     
 */

router.put('/:idTutor',adminController.acceptTutor);

module.exports = router;