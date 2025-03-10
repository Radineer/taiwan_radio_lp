export default function Testimonials() {
  const testimonials = [
    {
      content: '和田さんから直におすすめの台湾スポットを教えてもらえて感激！現地の最新情報が手に入るのが本当に嬉しいです。',
      author: 'スタンダード会員',
      location: '東京都'
    },
    {
      content: '普段のラジオでは聴けないディープトークが最高。プレミアムに入ってよかった。メンバー同士の交流も楽しいです。',
      author: 'プレミアム会員',
      location: '大阪府'
    },
    {
      content: '法人会員としてコラボイベントを実施し、プロモーション効果を実感。台湾市場への展開に向けて貴重なネットワークが築けました。',
      author: '法人会員',
      location: '台北市'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            会員の声
          </h2>
          <p className="text-xl text-gray-600">
            実際に参加されている方々からの感想をご紹介
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <div className="absolute -top-4 left-8 text-blue-600 text-6xl">&ldquo;</div>
              <blockquote className="relative">
                <p className="text-gray-600 mb-4 mt-2">
                  {testimonial.content}
                </p>
                <footer>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ※ 実際の会員様の声をもとに作成しています
          </p>
        </div>
      </div>
    </section>
  )
} 