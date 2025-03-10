import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: 'どんな支払い方法に対応していますか？',
      answer: 'Stripeによるクレジットカード決済がメインです。その他の方法はお問い合わせください。'
    },
    {
      question: '途中でプランを変更できますか？',
      answer: 'はい。上位プランへのアップグレードやダウングレードも可能です。'
    },
    {
      question: '海外からの参加は可能ですか？',
      answer: '可能です。ラジオアーカイブなどオンラインで利用いただけます。イベント参加は別途検討を。'
    },
    {
      question: '退会方法を教えてください。',
      answer: '会員ページ内からいつでも退会可能。翌月以降の決済は停止されます。'
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">よくある質問</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4"
            >
              <button
                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-left">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
