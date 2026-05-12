import type { Metadata } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ovidio Rodríguez · Frontend Developer",
  description:
    "Frontend developer from Caracas, Venezuela. Building with React, Next.js, and TypeScript.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased relative`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
