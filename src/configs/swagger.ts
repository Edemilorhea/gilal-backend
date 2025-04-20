import swaggerJSDoc from "swagger-jsdoc"

export const swaggerSpec = swaggerJSDoc({
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Gmail API 測試",
			version: "1.0.0",
			description: "後端 API 文件，包含寄信功能",
		},
	},
	apis: ["./src/routes/*.ts", "./src/index.ts"],
})
