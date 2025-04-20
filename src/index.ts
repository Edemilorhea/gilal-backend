import express from "express"
import swaggerUi from "swagger-ui-express"
import dotenv from "dotenv"
import cors from "cors"
import { swaggerSpec } from "./configs/swagger"
import { sendMailRouter } from "./routes/sendMail"
import { userLocationRouter } from "./routes/userLocation"

dotenv.config()
const isDev = process.env.NODE_ENV !== "production"

const app = express()

app.set("trust proxy", true) // 👈 這裡！

const PORT = process.env.PORT || 3133

app.use(
	cors({
		origin: isDev ? "http://localhost:3001" : "https://gilal-global.com",
		credentials: true,
		methods: ["GET", "POST"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
)
app.use(express.json())

// Swagger 文件路由
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// 寄信路由
app.use("/api", sendMailRouter)
app.use("/api", userLocationRouter)

// 測試 API
/**
 * @openapi
 * /api/hello:
 *   get:
 *     summary: 測試 Hello API
 *     responses:
 *       200:
 *         description: 成功回應
 */

app.get("/", (req, res) => {
	res.send("歡迎來到 Gilal 後端測試")
})

app.get("/api/hello", (req, res) => {
	res.json({ message: "Hello World!" })
})

app.listen(PORT, () => {
	console.log(`📬 Server running at http://localhost:${PORT}`)
	console.log(`📘 Swagger UI available at http://localhost:${PORT}/api-docs`)
})
