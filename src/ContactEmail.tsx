import { Html, Head, Body, Text } from "@react-email/components"

export function ContactEmail({
	name,
	email,
	message,
}: {
	name: string
	email: string
	message: string
}) {
	return (
		<Html>
			<Head />
			<Body>
				<Text style={{ fontWeight: "bold", fontSize: "20px" }}>
					聯絡人: {name}
				</Text>
				<Text style={{ fontWeight: "bold", fontSize: "20px" }}>
					電子郵件: {email}
				</Text>
				<Text>訊息: {message}</Text>
			</Body>
		</Html>
	)
}
