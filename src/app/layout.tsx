import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kick-up Geers",
  description: "Kick-up Geers @ Adeliz Global Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
