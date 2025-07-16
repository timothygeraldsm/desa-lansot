import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Instagram, Clock, User, AlertCircle } from "lucide-react"

export default function KontakPage() {
  return (
    <div className="container px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Kontak Desa Lansot</h1>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Hubungi kami untuk informasi lebih lanjut atau layanan desa
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
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

          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-4 pb-8">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-900">Hotline Pengaduan</p>
                  <p className="text-base text-gray-600">Akan segera tersedia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-900">Email Resmi</p>
                  <p className="text-base text-gray-600">Akan segera tersedia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-900">Jam Pelayanan</p>
                  <div className="text-base text-gray-700">
                    <p>Senin - Jumat: 08:00 - 16:00 WITA</p>
                    <p>Sabtu: 08:00 - 12:00 WITA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-4 pb-8">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Media Sosial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 h-16 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:bg-blue-100"
                >
                  <Facebook className="h-6 w-6 mr-3 text-blue-600" />
                  <span className="text-lg font-medium">Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 h-16 bg-gradient-to-r from-pink-50 to-rose-100 border-pink-200 hover:bg-pink-100"
                >
                  <Instagram className="h-6 w-6 mr-3 text-pink-600" />
                  <span className="text-lg font-medium">Instagram</span>
                </Button>
              </div>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Ikuti media sosial kami untuk mendapatkan informasi terbaru tentang kegiatan desa
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <User className="h-8 w-8 text-green-600" />
              </div>
              Kirim Pesan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="nama" className="text-base font-semibold text-gray-900">
                    Nama Lengkap
                  </label>
                  <Input id="nama" placeholder="Masukkan nama lengkap" className="h-12 text-base" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="telepon" className="text-base font-semibold text-gray-900">
                    Nomor Telepon
                  </label>
                  <Input id="telepon" placeholder="Masukkan nomor telepon" className="h-12 text-base" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-base font-semibold text-gray-900">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Masukkan alamat email" className="h-12 text-base" />
              </div>

              <div className="space-y-3">
                <label htmlFor="subjek" className="text-base font-semibold text-gray-900">
                  Subjek
                </label>
                <Input id="subjek" placeholder="Masukkan subjek pesan" className="h-12 text-base" />
              </div>

              <div className="space-y-3">
                <label htmlFor="pesan" className="text-base font-semibold text-gray-900">
                  Pesan
                </label>
                <Textarea
                  id="pesan"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={6}
                  className="text-base resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-14 text-lg font-semibold">
                Kirim Pesan
              </Button>
            </form>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Catatan:</strong> Formulir ini akan segera aktif. Untuk sementara, Anda dapat menghubungi
                    kami langsung melalui kantor desa pada jam kerja.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contacts */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Kontak Darurat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="p-4 bg-red-100 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-10 w-10 text-red-600" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">Puskesmas</div>
              <div className="text-base text-gray-600">Akan segera tersedia</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">Polsek Tareran</div>
              <div className="text-base text-gray-600">Akan segera tersedia</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl hover:shadow-md transition-shadow duration-200">
              <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">Damkar</div>
              <div className="text-base text-gray-600">Akan segera tersedia</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
