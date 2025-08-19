import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '商家品牌館 - 台灣糕點百選',
  description: '探索台灣糕餅品牌的故事與傳承，從百年老店到創新品牌，每個都有獨特的職人精神與文化底蘊。',
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            商家品牌館
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            每一個品牌都有獨特的故事與職人精神，傳承台灣糕餅文化的精髓
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/brands/traditional">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  🏛️ 百年老店
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  傳承百年的經典工藝，堅持古法製作，保留最純正的台灣糕餅風味。
                  這些老字號品牌見證了台灣糕餅文化的發展歷程。
                </p>
                <p className="text-amber-600 font-medium">點擊探索 →</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/brands/modern">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  ✨ 創新品牌
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  結合傳統技藝與現代創意，開發出符合現代人口味的新式糕點。
                  在傳承中創新，在創新中傳承。
                </p>
                <p className="text-amber-600 font-medium">點擊探索 →</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center">
          <Card className="border-amber-200 bg-amber-50 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">品牌故事的力量</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                我們相信每一份糕餅背後都有一個動人的故事。
                透過品牌館，您不僅能品嚐到美味的糕點，
                更能了解每個品牌的文化底蘊與職人精神，
                感受台灣糕餅文化的豐富多元。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}