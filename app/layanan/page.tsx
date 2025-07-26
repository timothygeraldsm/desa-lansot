import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Users, Heart, Building, ShoppingCart, FileText, Phone } from "lucide-react"
import Image from "next/image"

export default function LayananPage() {
  const governmentStaff = [
    {
      position: "Hukum Tua",
      name: "JUSUF D. KARUNDENG, S.E",
      phone: "081524519809",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Sekretaris Desa",
      name: "FRITS V. RUMERUNG",
      phone: "089668681467",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Seksi Pemerintahan",
      name: "JANOVA KARAMOY",
      phone: "0895395363721",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Seksi Kesejahteraan",
      name: "AUDY W.H KONDOJ",
      phone: "089530281288",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Seksi Pelayanan",
      name: "KRISTINY V. KARUNDENG A.M.Ak",
      phone: "085823432205",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Urusan Tata Usaha dan Umum",
      name: "RONALD J. KONDOJ",
      phone: "085825180607",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Urusan Keuangan",
      name: "SARAH D. Y PRANG, S.E",
      phone: "0882022053202",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Urusan Perencanaan",
      name: "JOHNLI S. RUNTUWENE",
      phone: "085825180710",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Jaga 1",
      name: "LIFERSON TUMBEL",
      phone: "0895801861436",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Jaga 2",
      name: "OLIVIA L. TAMPI",
      phone: "0887435430970",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Jaga 3",
      name: "DIANE L. TAWAS",
      phone: "0895395368045",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Jaga 4",
      name: "STEVEN KARUNDENG",
      phone: "085340077077",
      photo: "/placeholder.svg?height=120&width=120",
    },
    {
      position: "Kepala Jaga 5",
      name: "JENNY M. RUMANGU",
      phone: "085757312967",
      photo: "/placeholder.svg?height=120&width=120",
    },
    { position: "Staf Desa", name: "THAMSIN R. THAMRIN", phone: "", photo: "/placeholder.svg?height=120&width=120" },
  ]

  const healthFacilities = [
    { name: "Puskesmas", count: 1 },
    { name: "Praktek Dokter", count: 2 },
    { name: "Praktek Bidan", count: 2 },
    { name: "Rumah Bersalin", count: 1 },
    { name: "Rumah Tunggu Persalinan", count: 1 },
    { name: "Posyandu Balita dan Lansia", count: 1 },
    { name: "Kader Kesehatan Posyandu", count: 25 },
  ]

  const economicFacilities = [
    {
      category: "Perbankan & Koperasi",
      items: ["Bank (Swasta dan BUMD) - 2 Unit", "Koperasi Unit Desa (KUD) - 1 Unit"],
    },
    {
      category: "Perdagangan",
      items: [
        "Pasar Tradisional - 1 Unit",
        "Toko/Warung Sembako - 7 Unit",
        "Toko Klontong - 3 Unit",
        "Rumah Makan - 6 Unit",
      ],
    },
    {
      category: "Jasa & Industri",
      items: [
        "Toko Bangunan - 1 Unit",
        "Bengkel Motor - 1 Unit",
        "Toko Suku Cadang Motor - 1 Unit",
        "PT/CV/UD - 3 Unit",
      ],
    },
    {
      category: "Usaha Desa",
      items: ["Badan Usaha Milik Desa - 1 Unit"],
    },
  ]

  return (
    <div className="container px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Layanan Desa Lansot</h1>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Informasi lengkap tentang perangkat desa, fasilitas, dan layanan yang tersedia
        </p>
      </div>

      {/* Government Staff */}
      <Card className="border-0 shadow-lg max-w-7xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            Perangkat Desa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentStaff.map((staff, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Profile Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={staff.photo || "/placeholder.svg"}
                      alt={`Foto ${staff.name}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs px-2 py-1">
                      Aktif
                    </Badge>
                  </div>
                </div>

                {/* Staff Information */}
                <div className="text-center space-y-3 flex-1">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{staff.position}</h3>
                    <p className="text-base text-gray-600 font-medium">{staff.name}</p>
                    {staff.phone && <p className="text-sm text-primary font-medium">{staff.phone}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="py-4">
        <Separator className="bg-gray-200 max-w-7xl mx-auto" />
      </div>

      {/* Health Facilities */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            Fasilitas Kesehatan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthFacilities.map((facility, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl font-bold text-red-600 mb-3">{facility.count}</div>
                <div className="text-lg font-semibold text-gray-900">{facility.name}</div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Phone className="h-6 w-6 text-blue-600" />
              Layanan Kesehatan Tersedia:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Pemeriksaan kesehatan umum
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Pelayanan ibu dan anak
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Imunisasi rutin
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Posyandu balita dan lansia
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Penyuluhan kesehatan masyarakat
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="py-4">
        <Separator className="bg-gray-200 max-w-6xl mx-auto" />
      </div>

      {/* Economic Facilities */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Building className="h-8 w-8 text-green-600" />
            </div>
            Fasilitas Ekonomi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {economicFacilities.map((category, index) => (
              <div key={index} className="space-y-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-green-600" />
                  </div>
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-white text-gray-700 hover:bg-gray-50">
                        {item}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Services */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            Layanan Administrasi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Surat Keterangan</h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Surat Keterangan Domisili
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Surat Keterangan Usaha
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Surat Keterangan Tidak Mampu
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Pelayanan KTP & KK</h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Pengantar KTP Baru
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Pengantar Perubahan KK
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Surat Pindah Domisili
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Layanan Lainnya</h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Legalisir Dokumen
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Surat Pengantar Nikah
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Surat Keterangan Kelahiran
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
