import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Compass, Ruler, Navigation, Globe, TreePine } from "lucide-react"

export default function GeografiPage() {
  const borders = [
    { direction: "Utara", area: "Desa Rumoong Atas dan Desa Wiau Lapi" },
    { direction: "Timur", area: "Desa Lansot Timur" },
    { direction: "Selatan", area: "Desa Ranolambot Kab. Minahasa" },
    { direction: "Barat", area: "Desa Rumoong Atas" },
  ]

  return (
    <div className="container px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Geografi Desa Lansot</h1>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Lokasi, koordinat, dan informasi geografis Desa Lansot
        </p>
      </div>

      {/* Location Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Lintang Utara</CardTitle>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Compass className="h-6 w-6 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">1°23'02"</div>
            <p className="text-base text-gray-500">LU</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Bujur Timur</CardTitle>
            <div className="p-3 bg-green-100 rounded-lg">
              <Navigation className="h-6 w-6 text-green-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">124°73'85"</div>
            <p className="text-base text-gray-500">BT</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Luas Wilayah</CardTitle>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Ruler className="h-6 w-6 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">343.5</div>
            <p className="text-base text-gray-500">Hektar</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Ketinggian</CardTitle>
            <div className="p-3 bg-orange-100 rounded-lg">
              <MapPin className="h-6 w-6 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">~500</div>
            <p className="text-base text-gray-500">mdpl</p>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            Peta Lokasi Desa Lansot
          </CardTitle>
        </CardHeader>
                                <CardContent className="space-y-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-200 overflow-hidden min-h-[200px] sm:min-h-[300px] md:min-h-[350px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.54080723952!2d125.05186249999998!3d1.3610885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32871abb6d8cd68d%3A0xb594df62ef9f99a2!2sLansot%2C%20Kema%2C%20North%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1753559914526!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
      </Card>

      {/* Administrative Location */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            Lokasi Administratif
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">Desa</span>
                <Badge className="bg-blue-600 text-white px-4 py-2">Lansot</Badge>
              </div>
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">Kecamatan</span>
                <Badge className="bg-green-600 text-white px-4 py-2">Tareran</Badge>
              </div>
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">Kabupaten</span>
                <Badge className="bg-purple-600 text-white px-4 py-2">Minahasa Selatan</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">Provinsi</span>
                <Badge className="bg-orange-600 text-white px-4 py-2">Sulawesi Utara</Badge>
              </div>
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">Kode Pos</span>
                <Badge variant="outline" className="bg-white border-gray-300 px-4 py-2">
                  95914
                </Badge>
              </div>
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">Zona Waktu</span>
                <Badge variant="outline" className="bg-white border-indigo-300 text-indigo-700 px-4 py-2">
                  WITA (UTC+8)
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Village Borders */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <Compass className="h-8 w-8 text-red-600" />
            </div>
            Batas Wilayah Desa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {borders.map((border, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-lg font-semibold text-gray-900">Sebelah {border.direction}</span>
                </div>
                <Badge variant="outline" className="bg-white border-gray-300 px-4 py-2">
                  {border.area}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Topography */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <TreePine className="h-8 w-8 text-green-600" />
            </div>
            Kondisi Geografis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-4">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Lahan Pertanian</div>
              <div className="text-base text-gray-600">Sawah & Ladang</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-4">25%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Pemukiman</div>
              <div className="text-base text-gray-600">Rumah & Fasilitas</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-4">15%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Hutan & Lainnya</div>
              <div className="text-base text-gray-600">Area Konservasi</div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TreePine className="h-6 w-6 text-green-600" />
              Karakteristik Geografis:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Topografi berbukit dengan kemiringan sedang
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Iklim tropis dengan curah hujan tinggi
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Tanah subur cocok untuk pertanian
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Akses jalan utama menuju kecamatan tersedia
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Sumber air bersih dari mata air pegunungan
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
