import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            SELAMAT DATANG DI <span className="text-primary">LAYANAN INFORMASI</span> DESA LANSOT
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Portal informasi resmi Desa Lansot, Kecamatan Tareran, Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara.
            Temukan informasi lengkap tentang desa kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button asChild size="lg" className="h-14 px-8 text-lg">
              <Link href="/tentang">Tentang Desa</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg bg-transparent">
              <Link href="/layanan">Layanan Desa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami untuk layanan aduan dan informasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Address */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="flex flex-col items-center space-y-4 pb-6">
              <div className="p-4 bg-blue-100 rounded-xl">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900 text-center">Alamat</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-medium">Desa Lansot</p>
                <p>Kecamatan Tareran</p>
                <p>Kabupaten Minahasa Selatan</p>
                <p>Provinsi Sulawesi Utara</p>
                <p className="font-medium text-primary mt-2">LU 1°23'02" BT 124°73'85"</p>
              </div>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="flex flex-col items-center space-y-4 pb-6">
              <div className="p-4 bg-green-100 rounded-xl">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900 text-center">Telepon Aduan</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="space-y-2">
                <div className="text-base font-bold text-gray-900">0895331376944</div>
                <p className="text-sm text-gray-600">Layanan Informasi Desa</p>
                <div className="text-base font-bold text-gray-900">(0430) 22241</div>
                <p className="text-sm text-gray-600">Polres Minahasa Selatan</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Tentang Desa Lansot</h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Desa Lansot adalah sebuah desa yang kaya akan sejarah, didirikan pada tahun 1560 oleh tiga Tonaas yaitu
              Maabe, Seke, dan Pisek. Nama "Lansot" berasal dari kata "Langsot" yang memiliki makna historis dalam
              perjalanan pembentukan desa ini.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" className="h-14 px-8 text-lg">
                <Link href="/tentang">Baca Selengkapnya</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container px-6 lg:px-8 space-y-12 pb-20">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Layanan Utama</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akses cepat ke informasi dan layanan penting Desa Lansot
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
            <CardHeader className="space-y-4 pb-6">
              <CardTitle className="text-xl font-bold text-gray-900">Statistik Desa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Lihat data lengkap penduduk, mata pencaharian, dan demografi desa.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full h-12 bg-transparent border-2 hover:bg-primary hover:text-white hover:border-primary"
              >
                <Link href="/statistik">Lihat Statistik</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
            <CardHeader className="space-y-4 pb-6">
              <CardTitle className="text-xl font-bold text-gray-900">Layanan Desa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Informasi perangkat desa, fasilitas kesehatan, dan ekonomi.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full h-12 bg-transparent border-2 hover:bg-primary hover:text-white hover:border-primary"
              >
                <Link href="/layanan">Lihat Layanan</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
            <CardHeader className="space-y-4 pb-6">
              <CardTitle className="text-xl font-bold text-gray-900">Geografi & Peta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 leading-relaxed">Lokasi, koordinat, dan batas wilayah Desa Lansot.</p>
              <Button
                asChild
                variant="outline"
                className="w-full h-12 bg-transparent border-2 hover:bg-primary hover:text-white hover:border-primary"
              >
                <Link href="/geografi">Lihat Peta</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
