import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/app/comp/NavigationBar"
import { UnderstandingProvider } from "./comp/UnderstandingContext";

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

export const metadata: Metadata = {
  title: "Project 2 spaced repetition system",
  description: "A spaced repetition system is a flashcard system that stores data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar/>
        <UnderstandingProvider>
        {children}
        </UnderstandingProvider>
      </body>
    </html>
  );
}
