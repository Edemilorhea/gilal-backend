import * as React from "react"
import { Html, Head, Body, Text } from "@react-email/components"

export function ContactEmail({
	fullName,
	email,
	details,
	country,
}: {
	fullName: string
	email: string
	details: string
	country: string
}) {
	return (
		<Html>
			<Head />
			<Body>
				<Text style={{ fontWeight: "bold", fontSize: "20px" }}>
					聯絡人: {fullName}
				</Text>
				<Text style={{ fontWeight: "bold", fontSize: "20px" }}>
					電子郵件: {email}
				</Text>
				<Text style={{ fontWeight: "bold", fontSize: "20px" }}>
					國籍: {country}
				</Text>
				<Text>訊息: {details}</Text>
			</Body>
		</Html>
	)
}
