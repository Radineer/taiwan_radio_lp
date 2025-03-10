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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-blue-600">
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-6 bg-gray-50 rounded-lg">
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