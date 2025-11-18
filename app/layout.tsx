import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alfa Climatização - Serviços Técnicos de Ar Condicionado",
  description: "Especialistas em instalação, manutenção e PMOC de ar condicionado. Conforto térmico garantido para sua casa e empresa.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "android-chrome",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
