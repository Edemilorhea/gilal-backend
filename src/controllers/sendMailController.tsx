import { Request, Response } from "express"
import { google } from "googleapis"
import dotenv from "dotenv"
import { render } from "@react-email/render"
import { ContactEmail } from "../ContactEmail"

dotenv.config()

const oAuth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	process.env.REDIRECT_URI
)
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

function makeBody(to: string, subject: string, htmlContent: string) {
	const str = [
		`To: ${to}`,
		"Content-Type: text/html; charset=utf-8",
		`Subject: ${subject}`,
		"",
		htmlContent,
	].join("\n")

	return Buffer.from(str)
		.toString("base64")
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "")
}

export const sendEmail = async (req: Request, res: Response) => {
	const { subject, name, email, message } = req.body
	const to: string = process.env.TO_EMAIL!
	console.log(to, subject, name, email, message)
	try {
		// ✅ 使用 ReactEmail 渲染成 HTML

		const html = await render(
			<ContactEmail name={name} email={email} message={message} />
		)

		const gmail = google.gmail({ version: "v1", auth: oAuth2Client })
		const raw = makeBody(to, subject, html)

		await gmail.users.messages.send({
			userId: "me",
			requestBody: { raw },
		})

		res.status(200).json({ success: true })
	} catch (error) {
		console.error("寄信失敗", error)
		res.status(500).json({ error: "寄信失敗" })
	}
}
