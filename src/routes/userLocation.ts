import { Router } from "express"
import { sendEmail } from "../controllers/sendMailController"
import { getLocation } from "../controllers/getLocationController"

const router = Router()

/**
 * @openapi
 * /api/user-location:
 *   get:
 *     summary: 獲取使用者位置
 *     parameters:
 *       - in: query
 *         name: ip
 *         schema:
 *           type: string
 *         required: false
 *         description: 可選的 IP 地址，預設使用發出請求的來源 IP
 *     responses:
 *       200:
 *         description: 傳回該 IP 的國家名稱
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
router.get("/user-location", getLocation)

export const userLocationRouter = router
