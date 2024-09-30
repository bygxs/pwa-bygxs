import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Define your metadata here without viewport and themeColor
export const metadata: Metadata = {
    title: "PWA NextJS",
    description: "It's a simple progressive web application made with NextJS",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["nextjs", "next14", "pwa", "next-pwa"],
    authors: [
        {
            name: "imvinojanv",
            url: "https://www.linkedin.com/in/imvinojanv/",
        },
    ],
    icons: [
        {rel: "apple-touch-icon", url: "icons/icon.png"},
        {rel: "icon", url: "icons/icon.png"},
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Add meta tags for viewport and theme color directly here */}
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
