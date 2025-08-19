import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/homepage/footer'
import { ProductGrid } from '@/components/products/product-grid'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: '所有商品 - 台灣糕點百選',
  description: '瀏覽台灣糕點百選精心挑選的伴手禮商品，包含傳統糕餅、創新甜點、節慶禮盒等多樣選擇。',
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <CardContent className="p-4">
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-3" />
            <Skeleton className="h-6 w-1/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            精選商品
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            嚴選台灣各地優質糕餅品牌，每一份都承載著職人精神與文化傳承
          </p>
        </header>

        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
      </div>
      <Footer />
    </div>
  )
}