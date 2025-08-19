import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/navigation/navbar'
import { HeroCarousel } from '@/components/homepage/hero-carousel'
import { FeaturedCategories } from '@/components/homepage/featured-categories'
import { BrandStories } from '@/components/homepage/brand-stories'
import { ProductGrid } from '@/components/products/product-grid'
import { Footer } from '@/components/homepage/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: '台灣糕點百選 - 精選伴手禮購物平台',
  description: '台灣糕餅伴手禮的權威購物平台，嚴選百家經典糕點品牌，提供優質伴手禮、企業禮盒、節慶送禮服務。傳承台灣糕餅文化，品味職人精神。',
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <HeroCarousel />
        </section>

        {/* Featured Categories */}
        <FeaturedCategories />

        {/* Hot Products Section */}
        <section className="py-16 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                熱銷商品
              </h2>
              <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                精選人氣商品，每一份都經過嚴格品質把關
              </p>
            </div>

            <Suspense fallback={<ProductGridSkeleton />}>
              <ProductGrid />
            </Suspense>
          </div>
        </section>

        {/* Brand Stories */}
        <BrandStories />
      </main>

      <Footer />
    </div>
  );
}
