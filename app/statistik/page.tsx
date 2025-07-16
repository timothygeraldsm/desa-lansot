import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, UserCheck, UserX, Briefcase, GraduationCap } from "lucide-react"

export default function StatistikPage() {
  const occupationData = [
    { name: "Petani", count: 320, percentage: 37.6 },
    { name: "Pedagang", count: 145, percentage: 17.0 },
    { name: "PNS/TNI/Polri", count: 89, percentage: 10.5 },
    { name: "Buruh", count: 112, percentage: 13.2 },
    { name: "Wiraswasta", count: 95, percentage: 11.2 },
    { name: "Pensiunan", count: 45, percentage: 5.3 },
    { name: "Lainnya", count: 45, percentage: 5.3 },
  ]

  return (
    <div className="container px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Statistik Desa Lansot</h1>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
          Data demografi dan statistik penduduk Desa Lansot
        </p>
      </div>

      {/* Population Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Total Penduduk
            </CardTitle>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-4xl font-bold text-gray-900">851</div>
            <p className="text-base text-gray-500">Jiwa</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Laki-laki</CardTitle>
            <div className="p-3 bg-green-100 rounded-lg">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-4xl font-bold text-gray-900">441</div>
            <p className="text-base text-gray-500">51.8% dari total</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
            <CardTitle className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Perempuan</CardTitle>
            <div className="p-3 bg-purple-100 rounded-lg">
              <UserX className="h-6 w-6 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-4xl font-bold text-gray-900">410</div>
            <p className="text-base text-gray-500">48.2% dari total</p>
          </CardContent>
        </Card>
      </div>

      {/* Age Demographics */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            Demografi Berdasarkan Usia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-700 mb-2">156</div>
              <div className="text-base font-medium text-gray-700 mb-1">Anak (0-14 tahun)</div>
              <div className="text-sm text-gray-500">18.3%</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-700 mb-2">578</div>
              <div className="text-base font-medium text-gray-700 mb-1">Dewasa (15-64 tahun)</div>
              <div className="text-sm text-gray-500">67.9%</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl font-bold text-orange-700 mb-2">117</div>
              <div className="text-base font-medium text-gray-700 mb-1">Lansia (65+ tahun)</div>
              <div className="text-sm text-gray-500">13.8%</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">851</div>
              <div className="text-base font-medium text-gray-700 mb-1">Total Penduduk</div>
              <div className="text-sm text-gray-500">100%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Occupation Statistics */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Briefcase className="h-8 w-8 text-green-600" />
            </div>
            Mata Pencaharian Penduduk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {occupationData.map((occupation, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">{occupation.name}</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary">{occupation.count}</span>
                    <span className="text-sm text-gray-500 ml-2">({occupation.percentage}%)</span>
                  </div>
                </div>
                <Progress value={occupation.percentage} className="h-3 bg-gray-100" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education Statistics */}
      <Card className="border-0 shadow-lg max-w-6xl mx-auto">
        <CardHeader className="space-y-4 pb-8">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <GraduationCap className="h-8 w-8 text-purple-600" />
            </div>
            Tingkat Pendidikan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <div className="text-2xl font-bold text-red-700 mb-3">89</div>
              <div className="text-sm font-medium text-gray-700">Tidak Sekolah</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-2xl font-bold text-orange-700 mb-3">234</div>
              <div className="text-sm font-medium text-gray-700">SD/Sederajat</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="text-2xl font-bold text-yellow-700 mb-3">298</div>
              <div className="text-sm font-medium text-gray-700">SMP/Sederajat</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-2xl font-bold text-green-700 mb-3">187</div>
              <div className="text-sm font-medium text-gray-700">SMA/Sederajat</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-2xl font-bold text-blue-700 mb-3">43</div>
              <div className="text-sm font-medium text-gray-700">Diploma/S1+</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
