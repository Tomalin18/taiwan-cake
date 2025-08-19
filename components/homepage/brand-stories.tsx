import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const brandStories = [
  {
    id: 'traditional-master',
    title: '百年傳承的職人精神',
    story: '從阿公那一代開始，我們就堅持用最傳統的方法製作糕餅。每一個步驟都不能馬虎，因為這不只是生意，更是對顧客的承諾。',
    brandName: '老字號糕餅店',
    image: 'https://images.unsplash.com/photo-1556909114-c6a70f4d5ed3?w=400&h=300&fit=crop',
    category: 'traditional'
  },
  {
    id: 'modern-innovation',
    title: '在創新中尋找平衡',
    story: '我們相信傳統與創新可以並存。保留經典口味的同時，也嘗試加入現代人喜愛的元素，讓糕餅文化能夠延續下去。',
    brandName: '創新糕點工坊',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
    category: 'modern'
  },
  {
    id: 'family-recipe',
    title: '家族配方的溫暖記憶',
    story: '這個配方是媽媽留下來的珍貴遺產。每當客人品嚐到熟悉的味道，臉上露出滿足的笑容時，我就知道我們做對了。',
    brandName: '溫暖家族糕餅',
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=400&h=300&fit=crop',
    category: 'family'
  }
]

export function BrandStories() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            商家故事
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            每一個品牌都有獨特的故事，每一份糕點都承載著職人的心血
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {brandStories.map((story) => (
            <Card key={story.id} className="border-amber-200 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-amber-800 line-clamp-2">
                  {story.title}
                </CardTitle>
                <p className="text-sm text-amber-600 font-medium">
                  {story.brandName}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed line-clamp-4 mb-4">
                  {story.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
            <Link href="/brands">
              探索更多品牌故事
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}