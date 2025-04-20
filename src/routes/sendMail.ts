import { Router } from "express"
import { sendEmail } from "../controllers/sendMailController"

const router = Router()

/**
 * @openapi
 * /api/send-email:
 *   post:
 *     summary: 寄信 API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: 寄信成功
 */
router.post("/send-email", sendEmail)

export const sendMailRouter = router
