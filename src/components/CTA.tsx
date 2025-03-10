import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          日台をつなぐ新しい挑戦が、あなたの参加でさらに広がります
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          ぜひご一緒に、日台の架け橋となるコミュニティを作っていきましょう
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://buy.stripe.com/eVa9BY2hagnXeQgeUV"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            スタンダード会員になる（500円/月）
          </Link>
          
          <Link
            href="https://buy.stripe.com/5kA5lIaNGgnX9vW8ww"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            プレミアム会員になる（5,000円/月）
          </Link>
          
          <Link
            href="https://radineer.asia/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            法人会員プランを検討する
          </Link>
        </div>
      </div>
    </section>
  )
} 