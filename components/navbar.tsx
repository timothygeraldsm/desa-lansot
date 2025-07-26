"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MapPin } from "lucide-react"

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Desa" },
  { href: "/statistik", label: "Statistik" },
  { href: "/layanan", label: "Layanan Desa" },
  { href: "/geografi", label: "Geografi" },
  { href: "/kontak", label: "Kontak" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container flex h-20 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">Desa Lansot</span>
            <span className="text-xs text-gray-500 hidden sm:block">Minahasa Selatan</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center space-x-3 mb-8 mt-6">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">Desa Lansot</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
