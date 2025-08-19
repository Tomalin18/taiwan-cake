import { Metadata } from 'next'
import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/homepage/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '品牌故事 - 台灣糕點百選',
  description: '台灣糕點百選致力於成為台灣糕餅文化的傳播者，嚴選百家經典品牌，傳承職人精神與文化價值。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              台灣糕餅文化的守護者
            </h1>
            <p className="text-xl text-amber-700 leading-relaxed">
              我們不僅是一個購物平台，更是台灣糕餅文化的傳播者
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">我們的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  成為台灣糕餅伴手禮的權威性、信任感與文化傳承的線上標竿。
                  嚴選百家經典糕點品牌，讓每一份糕餅都承載著職人精神與台灣風情。
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">服務客群</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• 追求品質生活的本地消費者</li>
                  <li>• 尋找獨特台灣風味的國際觀光客</li>
                  <li>• 有企業送禮需求的商務客戶</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">品質承諾</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  我們堅持「精緻、信任、文化傳承」的核心價值，
                  透過高品質的商品選擇、專業的服務態度，
                  以及動人的品牌故事，讓每位顧客都能感受到
                  台灣糕餅文化的深厚底蘊與職人精神。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}