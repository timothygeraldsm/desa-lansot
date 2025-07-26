import Link from "next/link"
import { MapPin, Phone, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl">Desa Lansot</span>
                <p className="text-sm text-gray-300">Minahasa Selatan</p>
              </div>
            </div>
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-2">Kecamatan Tareran</p>
              <p className="mb-2">Kabupaten Minahasa Selatan</p>
              <p className="mb-2">Provinsi Sulawesi Utara</p>
              <p>Indonesia</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-white">Layanan Informasi Desa</p>
                  <p className="text-sm">0895331376944</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-white">Polres Minahasa Selatan</p>
                  <p className="text-sm">(0430) 22241</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Media Sosial</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-primary rounded-lg transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-primary rounded-lg transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ikuti media sosial kami untuk mendapatkan informasi terbaru tentang kegiatan desa
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Desa Lansot. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
