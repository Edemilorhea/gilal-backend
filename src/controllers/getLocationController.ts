import { Request, Response } from "express"

const getUserLocation = async (req: Request, res: Response) => {
	const ip =
		req.headers["x-forwarded-for"]?.toString().split(",")[0] || // 如果 behind proxy
		req.socket.remoteAddress || // fallback
		"8.8.8.8" // fallback 測試用

	console.log("使用者 IP：", ip)

	try {
		// 你可以改成任何 geo API
		const geoRes = await fetch(
			`https://get.geojs.io/v1/ip/country/full/${ip}`
		)
		const geoData = await geoRes.text()

		console.log("查詢結果：", geoData)
		res.status(200).send(geoData)
	} catch (err) {
		console.error("地理位置查詢失敗：", err)
		res.status(500).send("查詢位置失敗")
	}
}

export const getLocation = getUserLocation
