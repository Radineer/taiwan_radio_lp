import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">台湾日本Radio Express オンラインサロン</h3>
            <p className="text-gray-400 mb-4">
              日台をつなぐ新しい挑戦が、あなたの参加でさらに広がります。ぜひご一緒に！
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://buy.stripe.com/eVa9BY2hagnXeQgeUV"
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                スタンダード会員になる
              </Link>
              <Link 
                href="https://buy.stripe.com/5kA5lIaNGgnX9vW8ww"
                className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
              >
                プレミアム会員になる
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://radineer.asia/contact" className="text-gray-400 hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="https://radineer.asia/%e7%89%b9%e5%ae%9a%e5%95%86%e5%8f%96%e5%bc%95%e6%b3%95%e3%81%ab%e5%9f%ba%e3%81%a5%e3%81%8f%e8%a1%a8%e8%a8%98/" className="text-gray-400 hover:text-white transition-colors">
                    特定商取引法に基づく表記
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">運営</h4>
              <p className="text-gray-400">
                株式会社Radineer
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Radineer Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
