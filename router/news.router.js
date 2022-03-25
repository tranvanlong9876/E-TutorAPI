const express = require('express');
const router = express.Router();
const newsController  = require("../controller/newsController");

/**
 * @swagger
 * /api/v1/news:
 *   get:
 *     tags:
 *      - "News"
 *     summary: Load all available news
 *     description: Get All News
 *     responses:
 *       200:
 *         description: Return all news uploaded by Admin!
 */


router.get("/", newsController.getAllNews);

/**
 * @swagger
 * /api/v1/news:
 *   post:
 *     tags:
 *      - "News"
 *     summary: Create a news
 *     description: Create a news
 *     parameters:
 *      - name: title
 *        description: Title of news
 *        in: formData
 *        required: true
 *        type: string
 *      - name: content
 *        description: Content of news
 *        in: formData
 *        required: true
 *        type: string
 * 
 *     responses:
 *       202:
 *         description: Create News Success!
 */

router.post("/",newsController.createNews);


module.exports = router;