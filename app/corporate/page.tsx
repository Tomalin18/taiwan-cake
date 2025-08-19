import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: '企業專區 - 台灣糕點百選',
  description: '提供企業客戶專業的採購服務，包含客製化禮盒、大宗採購、發票開立等完整解決方案。',
}

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            企業專區
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            專為企業客戶提供專業的採購服務與客製化解決方案
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🎁 客製化禮盒
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                根據企業品牌特色和預算需求，
                量身訂製專屬禮盒。從商品選擇到包裝設計，
                打造獨一無二的企業禮品。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 品牌形象設計整合</li>
                <li>• 多樣化商品組合選擇</li>
                <li>• 專業包裝設計服務</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                📦 大宗採購
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                提供企業大量採購優惠方案，
                滿足員工福利、客戶贈禮、
                活動紀念品等各種需求。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 量大優惠價格方案</li>
                <li>• 彈性交期安排</li>
                <li>• 全台配送服務</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                📋 專業發票服務
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                完整的企業發票開立服務，
                支援統一編號登記、三聯式發票，
                讓企業採購更便利。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 統一編號發票開立</li>
                <li>• 電子發票整合</li>
                <li>• 財務報表支援</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🤝 專屬客服
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                指派專業客服人員協助企業客戶，
                提供一對一的諮詢服務，
                確保每個需求都獲得完善處理。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 專人服務窗口</li>
                <li>• 快速報價回覆</li>
                <li>• 訂單進度追蹤</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                🚚 物流配送
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                提供企業級物流配送服務，
                支援指定時間配送、多點配送，
                滿足各種配送需求。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 預約配送時間</li>
                <li>• 多地點同時配送</li>
                <li>• 配送狀態即時追蹤</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center">
                💼 長期合作
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                建立長期合作關係，
                提供年度採購優惠方案、
                VIP客戶專屬服務等加值服務。
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• VIP 客戶專屬優惠</li>
                <li>• 年度合約價格保障</li>
                <li>• 優先商品預訂權</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <Card className="border-amber-200 bg-amber-50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">聯絡我們</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                歡迎企業客戶聯繫我們的專業團隊，我們將根據您的需求
                提供最合適的採購方案與服務建議。
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Button variant="outline" className="h-16 flex-col space-y-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">電話諮詢</span>
                  <span className="text-xs text-gray-500">02-1234-5678</span>
                </Button>
                
                <Button variant="outline" className="h-16 flex-col space-y-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">電子郵件</span>
                  <span className="text-xs text-gray-500">corporate@example.com</span>
                </Button>
                
                <Button variant="outline" className="h-16 flex-col space-y-2">
                  <FileText className="h-5 w-5" />
                  <span className="text-sm">線上表單</span>
                  <span className="text-xs text-gray-500">即將推出</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}