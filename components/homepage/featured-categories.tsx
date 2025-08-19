import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
  {
    id: 'traditional',
    name: '傳統糕餅',
    description: '經典口味，世代傳承',
    icon: '🥮',
    href: '/products' as const
  },
  {
    id: 'modern',
    name: '創新甜點',
    description: '現代工藝，創意口感',
    icon: '🧁',
    href: '/products' as const
  },
  {
    id: 'festival',
    name: '節慶專區',
    description: '應景糕點，團圓時光',
    icon: '🎋',
    href: '/festival-gifts' as const
  },
  {
    id: 'gift',
    name: '伴手禮盒',
    description: '精美包裝，心意滿分',
    icon: '🎁',
    href: '/products' as const
  }
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            精選分類
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            從傳統經典到創新口味，滿足每個人的味蕾偏好
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="group border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}