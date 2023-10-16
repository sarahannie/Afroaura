import "@/styles/globals.css";
import { Metadata } from "next";
import 'node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import 'node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import NavbarMain  from "@/components/navbarmain";
import clsx from "clsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<NavbarMain />
						<main className="container mx-auto max-w-7xl  flex-grow">
							{children}
						</main>
						
					</div>
				</Providers>
				
			</body>
		</html>
	);
}
