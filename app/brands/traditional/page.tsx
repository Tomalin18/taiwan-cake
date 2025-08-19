import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '百年老店 - 台灣糕點百選',
  description: '探索台灣百年老店的傳統工藝與經典口味，感受世代傳承的職人精神與糕餅文化。',
}

export default function TraditionalBrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            百年老店
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            傳承百年的經典工藝，堅持古法製作，保留最純正的台灣糕餅風味
          </p>
        </header>

        <div className="grid gap-8">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">傳統工藝的守護者</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                這些百年老店是台灣糕餅文化的活化石，他們不僅保存了古老的製作技藝，
                更承載著世代相傳的文化記憶。每一份糕點都是時間的結晶，
                是師傅們用心與技藝淬煉出的珍貴遺產。
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏛️</div>
                  <h3 className="font-semibold text-amber-800 mb-2">百年傳承</h3>
                  <p className="text-sm text-gray-600">世代相傳的製作工藝</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👨‍🍳</div>
                  <h3 className="font-semibold text-amber-800 mb-2">職人精神</h3>
                  <p className="text-sm text-gray-600">專注細節的匠心製作</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌾</div>
                  <h3 className="font-semibold text-amber-800 mb-2">古法製作</h3>
                  <p className="text-sm text-gray-600">堅持傳統的製作方式</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">文化價值</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                選擇百年老店的糕點，不僅是品味經典口感，更是支持台灣傳統文化的傳承。
                這些老店見證了台灣社會的變遷，在時代的洪流中堅持自己的信念，
                用最純粹的方式詮釋著台灣糕餅的精髓。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}