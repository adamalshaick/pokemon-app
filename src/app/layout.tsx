import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const IBMVGA = localFont({
  src: "./fonts/Web437_IBM_VGA_9x16.woff",
  variable: "--font-ibm-vga",
  weight: "400 700"
})

export const metadata: Metadata = {
  title: "Pokemon app",
  description: "Pokemon app description"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${IBMVGA.variable}`}>{children}</body>
    </html>
  )
}
