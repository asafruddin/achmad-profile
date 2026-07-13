import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://asafruddin.github.io/web-profile";
const title = "Achmad Safruddin | Software Engineer";
const description =
  "Portfolio of Achmad Safruddin — a Software Engineer building fullstack web and mobile products with Next.js, TypeScript, Flutter, and React Native.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Software Engineer",
    "Fullstack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "React Native",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Achmad Safruddin" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Achmad Safruddin",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
