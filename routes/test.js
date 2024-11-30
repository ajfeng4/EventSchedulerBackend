const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test API endpoints
 */

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Retrieve a test message
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Successful response with a test message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: This is a test message!
 */
router.get('/test', (req, res) => {
    res.json({ message: 'This is a test message!' });
});

/**
 * @swagger
 * /api/test/echo:
 *   post:
 *     summary: Echo the received message
 *     tags: [Test]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Hello, World!
 *     responses:
 *       200:
 *         description: Echoed message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 echoedMessage:
 *                   type: string
 *                   example: Hello, World!
 */
router.post('/test/echo', (req, res) => {
    const { message } = req.body;
    console.log(`Received message: ${message}`);
    res.json({ echoedMessage: message });
});

module.exports = router;