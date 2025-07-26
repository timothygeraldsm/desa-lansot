import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TentangPage() {
  return (
    <div className="container px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Tentang Desa Lansot</h1>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Sejarah dan perjalanan Desa Lansot dari masa ke masa
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
              Sejarah Berdirinya Desa Lansot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Desa Lansot didirikan pada tahun <strong className="text-primary">1560</strong> oleh tiga orang Tonaas
              (pemimpin tradisional) yang bernama <strong className="text-primary">Maabe</strong>,{" "}
              <strong className="text-primary">Seke</strong>, dan <strong className="text-primary">Pisek</strong>.
              Ketiga tokoh ini memiliki peran penting dalam pembentukan dan pengembangan awal desa.
            </p>
            <p className="text-lg">
              Para pendiri ini memilih lokasi yang strategis untuk membangun pemukiman yang kemudian berkembang menjadi
              Desa Lansot seperti yang kita kenal sekarang. Mereka membangun fondasi kehidupan bermasyarakat yang
              harmonis dan berkelanjutan.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Asal Usul Nama "Lansot"</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Nama "Lansot" berasal dari kata <strong className="text-primary">"Langsot"</strong> yang memiliki makna
              historis dalam bahasa lokal. Nama ini dipilih berdasarkan karakteristik geografis dan kondisi alam di
              wilayah tersebut pada masa awal pembentukan desa.
            </p>
            <p className="text-lg">
              Seiring berjalannya waktu, penyebutan "Langsot" berubah menjadi "Lansot" sebagaimana yang digunakan hingga
              saat ini. Perubahan ini terjadi secara alami dalam perkembangan bahasa dan budaya masyarakat setempat.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
              Perpindahan dan Ritual Pembersihan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Penduduk Desa Lansot berasal dari sekelompok orang yang datang dari arah timur meninggalkan tempat
              bermukimnya akibat suatu bencana permukaan tanah yang ambruk (menurut cerita turun temurun berasal dari
              Kiawa) dan melakukan perjalanannya ke arah barat, sehingga tiba di suatu tempat yang layak untuk dijadikan
              permukiman baru tepatnya sekarang dinamakan perkebunan Kawiley.
            </p>
            <p className="text-lg">
              Namun di tempat ini mereka diserang penyakit kulit sehingga mereka kembali berpindah tempat ke arah utara
              menyeberang Sungai Tu'unan sebagai ritual untuk membersihkan diri dari penyakit kulit ke tempat yang
              sekarang dinamakan Lansot. Perpindahan ini terjadi pada tahun{" "}
              <strong className="text-primary">1664</strong> saat berkecamuknya perang Minahasa-Spanyol.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Asal Nama dari Buah Lansat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Nama Lansot diambil dari nama buah <strong className="text-primary">Lansat</strong>, karena ketika para
              Tonaas sedang bermusyawarah buah Lansat jatuh di tengah-tengah Tonaas sehingga mereka bersepakat untuk
              menamakan permukiman baru mereka dengan Lansot, dan nama tersebut sampai saat ini diabadikan sebagai nama
              Desa.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Relokasi Akibat Bencana</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Dalam perjalanan sejarahnya, Desa Lansot pernah mengalami relokasi akibat bencana alam yang melanda
              wilayah tersebut. Peristiwa ini menjadi titik balik penting dalam sejarah desa, di mana masyarakat harus
              berpindah ke lokasi yang lebih aman.
            </p>
            <p className="text-lg">
              Meskipun menghadapi tantangan berat, masyarakat Desa Lansot berhasil membangun kembali kehidupan mereka di
              lokasi baru dengan tetap mempertahankan nilai-nilai tradisional dan kearifan lokal yang telah diwariskan
              oleh para pendahulu.
            </p>
          </CardContent>
        </Card>

        <div className="py-8">
          <Separator className="bg-gray-200" />
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Pemekaran Desa (2011)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Pada awal tahun <strong className="text-primary">2010</strong> dengan melihat perkembangan desa dan
              pelayanan masyarakat maka melalui Musyawarah Desa disepakati untuk dimekarkan. Proses pemekaran ini
              terealisasi pada tanggal <strong className="text-primary">13 Oktober 2011</strong> melalui Rapat Paripurna
              DPRD Kabupaten Minahasa Selatan.
            </p>
            <p className="text-lg">
              Pemekaran Desa Lansot dengan Desa Lansot Timur dilakukan melalui{" "}
              <strong className="text-primary">Peraturan Daerah Nomor 08 Tahun 2011</strong> tentang Penetapan Desa
              Lansot Timur dan enam desa pemekaran lainnya.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-4 pb-8">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Desa Lansot Hari Ini</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Saat ini, Desa Lansot telah berkembang menjadi sebuah desa yang modern namun tetap mempertahankan
              nilai-nilai tradisional. Dengan jumlah penduduk <strong className="text-primary">851 jiwa</strong>, desa
              ini terus berbenah dalam berbagai aspek pembangunan.
            </p>
            <p className="text-lg">
              Desa Lansot kini memiliki berbagai fasilitas modern seperti Puskesmas, sekolah, dan infrastruktur yang
              memadai. Masyarakat desa juga aktif dalam berbagai kegiatan ekonomi, sosial, dan budaya yang mendukung
              kemajuan desa.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
