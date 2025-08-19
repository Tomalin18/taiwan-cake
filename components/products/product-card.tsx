'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { generateRefLink } from '@/lib/supabase'

interface Product {
  id: string
  merchant_id: string
  name: string
  price_in_cents: number
  image_url: string | null
  product_url?: string | null
  merchant?: {
    id: string
    name: string
    base_product_url: string
  }
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const refCode = process.env.NEXT_PUBLIC_REF_CODE || 'DEFAULT'
  const buyLink = generateRefLink(product, refCode)
  const priceInTWD = (product.price_in_cents / 100).toLocaleString('zh-TW')

  return (
    <Card className="group overflow-hidden border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-amber-50">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-300">
            <div className="text-6xl">🧁</div>
          </div>
        )}
        
        {/* Special Badge for featured products */}
        {product.id === 'PROD_001' && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            熱銷
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        {/* Merchant Name */}
        {product.merchant && (
          <p className="text-sm text-amber-600 mb-1 font-medium">
            {product.merchant.name}
          </p>
        )}
        
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-800">
            NT$ {priceInTWD}
          </span>
          <span className="text-sm text-gray-500">
            起
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          asChild 
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          <a 
            href={buyLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            立即購買
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}