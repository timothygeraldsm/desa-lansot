import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Facebook } from "lucide-react"
import Link from "next/link"

export default function KontakPage() {
  return (
    <div className="container px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Kontak Desa Lansot</h1>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Hubungi kami untuk informasi lebih lanjut atau layanan desa
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Village Office Address */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              Alamat Kantor Desa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="p-2 bg-blue-100 rounded-lg mt-1">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">Kantor Desa Lansot</p>
                <div className="text-base text-gray-700 leading-relaxed">
                  <p>Desa Lansot, Kecamatan Tareran</p>
                  <p>Kabupaten Minahasa Selatan</p>
                  <p>Provinsi Sulawesi Utara</p>
                  <p className="font-medium">Kode Pos: 95914</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Numbers */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              Nomor Telepon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <div className="p-3 bg-green-100 rounded-lg">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-900">Layanan Informasi Desa</p>
                <p className="text-xl font-bold text-green-700">0895331376944</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-900">Polres Minahasa Selatan</p>
                <p className="text-xl font-bold text-blue-700">(0430) 22241</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Facebook Link */}
      <Card className="border-0 shadow-lg max-w-4xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Facebook className="h-8 w-8 text-blue-600" />
            </div>
            Media Sosial
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <Button
            asChild
            size="lg"
            className="h-16 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <Link
              href="https://www.facebook.com/share/1Xtn845Eyi/?mibextid=qi2Omg"
              className="flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6" />
              <span className="text-lg font-semibold">Facebook Desa Lansot</span>
            </Link>
          </Button>
          <p className="text-base text-gray-600 leading-relaxed">
            Ikuti halaman Facebook resmi Desa Lansot untuk mendapatkan informasi terbaru tentang kegiatan desa
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
