import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">台灣糕點百選</h3>
            <p className="text-amber-200 leading-relaxed mb-6">
              台灣糕餅伴手禮的權威購物平台，
              傳承台灣糕餅文化，品味職人精神。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2 text-amber-200">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  品牌故事
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  所有商品
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors">
                  商家品牌館
                </Link>
              </li>
              <li>
                <Link href="/festival-gifts" className="hover:text-white transition-colors">
                  節慶禮盒
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">客戶服務</h4>
            <ul className="space-y-2 text-amber-200">
              <li>
                <Link href="/corporate" className="hover:text-white transition-colors">
                  企業專區
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  常見問題
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  配送資訊
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  退換貨政策
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">聯絡資訊</h4>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>service@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>台北市信義區糕餅街100號</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-amber-800 mb-8" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-amber-200 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              隱私權政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              服務條款
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie 政策
            </a>
          </div>

          {/* Copyright */}
          <div className="text-amber-200 text-sm md:text-right">
            <p>© 2024 台灣糕點百選. 保留所有權利.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}