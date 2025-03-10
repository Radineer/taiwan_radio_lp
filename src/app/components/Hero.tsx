import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          日台をつなぐ架け橋へ
          <span className="block text-2xl md:text-4xl mt-4">
            台湾日本Radio Express オンラインサロンでしか体験できないクロスカルチャーの世界
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-600">
          ラジオのアーカイブ、限定トーク、日台交流イベント…今すぐ新しい世界を体験しよう！
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="https://buy.stripe.com/eVa9BY2hagnXeQgeUV"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            スタンダード会員になる（500円/月）
          </Link>
          
          <Link 
            href="https://buy.stripe.com/5kA5lIaNGgnX9vW8ww"
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            プレミアム会員になる（5,000円/月）
          </Link>
          
          <Link 
            href="https://radineer.asia/contact"
            className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            法人会員プランを検討する
          </Link>
        </div>
      </div>
    </section>
  )
}
