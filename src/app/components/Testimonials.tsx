export default function Testimonials() {
  const testimonials = [
    {
      quote: '和田さんから直におすすめの台湾スポットを教えてもらえて感激！',
      author: '30代女性・会員歴6ヶ月'
    },
    {
      quote: '普段のラジオでは聴けないディープトークが最高。プレミアムに入ってよかった',
      author: '40代男性・会員歴1年'
    },
    {
      quote: '法人会員としてコラボイベントを実施し、プロモーション効果を実感',
      author: '法人会員・飲食店経営'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">会員の声</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <p className="text-gray-600">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
