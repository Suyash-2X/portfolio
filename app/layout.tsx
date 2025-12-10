import type React from "react"
import type { Metadata } from "next"
import { Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" })

export const metadata: Metadata = {
  title: "Eragon X Suyash Pratap Singh",
  description: "Transforming the web into structured insight",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${exo2.variable} font-sans antialiased bg-[#0a0a0f]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
