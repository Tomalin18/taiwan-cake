import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '節慶禮盒 - 台灣糕點百選',
  description: '精選台灣節慶禮盒，適合春節、中秋、端午等傳統節日，以及生日、婚禮等特殊場合的送禮需求。',
}

export default function FestivalGiftsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            節慶禮盒
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            精心策劃的節慶禮盒，讓您的心意在每個重要時刻都能完美傳達
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🧧 春節禮盒
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                精選傳統年糕、花生糖、芝麻糖等經典春節糕點，
                寓意甜甜蜜蜜、年年高升的美好祝福。
              </p>
              <p className="text-amber-600 font-medium">即將推出</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🌕 中秋禮盒
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                經典月餅搭配台灣特色糕點，
                傳統口味與創新元素的完美融合，
                讓團圓時光更加溫馨。
              </p>
              <p className="text-amber-600 font-medium">即將推出</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🌾 端午禮盒
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                特色粽子配搭傳統糕點，
                體驗端午節的文化深度，
                感受傳統節慶的溫暖情懷。
              </p>
              <p className="text-amber-600 font-medium">即將推出</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                💐 婚禮喜餅
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                精緻喜餅禮盒，象徵甜蜜幸福，
                讓您的重要時刻留下美好回憶，
                與親友分享喜悅。
              </p>
              <p className="text-amber-600 font-medium">即將推出</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🎂 生日禮盒
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                特製生日糕點組合，
                用心挑選的美味搭配，
                為壽星獻上最真摯的祝福。
              </p>
              <p className="text-amber-600 font-medium">即將推出</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🎁 客製禮盒
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                根據您的需求量身訂製，
                選擇最合適的糕點組合，
                打造獨一無二的專屬禮盒。
              </p>
              <p className="text-amber-600 font-medium">即將推出</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="border-amber-200 bg-amber-50 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">送禮的藝術</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                每一份節慶禮盒都承載著深厚的文化意義和滿滿的心意。
                我們精心挑選每一款糕點，用心設計每一個包裝，
                讓您的禮物不僅美味，更充滿溫度和意義。
                無論是傳統節慶還是人生重要時刻，
                都能找到最合適的禮盒選擇。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}