import { ProductCard } from './product-card'

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

async function getSelectedProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products?ids=PROD_001,PROD_002,PROD_003', {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    
    const products = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function ProductGrid() {
  const products = await getSelectedProducts()

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🧁</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          暫時沒有可展示的商品
        </h3>
        <p className="text-gray-500">
          我們正在努力準備更多精選商品，請稍後再來查看。
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}