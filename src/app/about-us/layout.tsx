import { Metadata } from "next";

export const metadata: Metadata = {
	title: "about us",
	description:
		"metastatiq is a web app for medical professionals and students alike to make their lives easier",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
