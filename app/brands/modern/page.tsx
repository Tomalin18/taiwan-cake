import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '創新品牌 - 台灣糕點百選',
  description: '探索台灣創新糕餅品牌的現代創意與新式口感，在傳承中創新，在創新中傳承。',
}

export default function ModernBrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            創新品牌
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            結合傳統技藝與現代創意，在傳承中創新，在創新中傳承
          </p>
        </header>

        <div className="grid gap-8">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">創新的力量</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                這些創新品牌承繼了台灣糕餅的精神內核，同時融入現代人的生活需求和口味偏好。
                他們不是背離傳統，而是讓傳統在新時代中綻放新的光彩，
                讓更多年輕世代能夠接觸並愛上台灣糕餅文化。
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <h3 className="font-semibold text-amber-800 mb-2">創意設計</h3>
                  <p className="text-sm text-gray-600">現代美學與包裝設計</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧪</div>
                  <h3 className="font-semibold text-amber-800 mb-2">口味創新</h3>
                  <p className="text-sm text-gray-600">結合國際元素的新口味</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <h3 className="font-semibold text-amber-800 mb-2">健康概念</h3>
                  <p className="text-sm text-gray-600">注重營養與健康平衡</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">傳承與創新的平衡</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                創新品牌的價值在於他們找到了傳統與現代的完美平衡點。
                他們尊重傳統工藝的精髓，同時勇於嘗試新的可能性。
                這種精神正是台灣文化的特色——包容、開放、不斷進步。
                透過這些品牌，台灣糕餅文化得以在全球化的浪潮中保持活力。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}