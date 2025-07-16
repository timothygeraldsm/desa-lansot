import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, Calendar, Building } from "lucide-react"
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

      {/* Key Statistics */}
      <section className="container px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Statistik Utama</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Data terkini mengenai kondisi demografis dan fasilitas Desa Lansot
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Total Penduduk
              </CardTitle>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">851</div>
              <p className="text-sm text-gray-500">441 Laki-laki, 410 Perempuan</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Luas Wilayah
              </CardTitle>
              <div className="p-3 bg-green-100 rounded-lg">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">343.5</div>
              <p className="text-sm text-gray-500">Hektar</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Tahun Berdiri
              </CardTitle>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">1560</div>
              <p className="text-sm text-gray-500">Oleh 3 Tonaas</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Fasilitas Kesehatan
              </CardTitle>
              <div className="p-3 bg-red-100 rounded-lg">
                <Building className="h-6 w-6 text-red-600" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">1</div>
              <p className="text-sm text-gray-500">Puskesmas</p>
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
