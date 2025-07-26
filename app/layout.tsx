import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Desa Lansot - Layanan Informasi Desa",
  description: "Website resmi Desa Lansot, Kecamatan Tareran, Kabupaten Minahasa Selatan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
