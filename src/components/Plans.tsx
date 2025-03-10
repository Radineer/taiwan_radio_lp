import Link from 'next/link'

export default function Plans() {
  const plans = [
    {
      name: 'スタンダード会員',
      price: '500',
      period: '月額',
      features: [
        'ラジオアーカイブコンテンツ配布'
      ],
      href: 'https://buy.stripe.com/eVa9BY2hagnXeQgeUV',
      buttonText: '今すぐ登録する',
      featured: false
    },
    {
      name: 'プレミアム会員',
      price: '5,000',
      period: '月額',
      features: [
        'ラジオアーカイブコンテンツ配布',
        '特別コンテンツの配布やイベントへの招待',
        'クレジット(名前)の掲載'
      ],
      href: 'https://buy.stripe.com/5kA5lIaNGgnX9vW8ww',
      buttonText: '今すぐ登録する',
      featured: true
    },
    {
      name: '法人会員',
      price: '50,000',
      period: '月額',
      features: [
        'ラジオアーカイブコンテンツ配布',
        '特別コンテンツの配布やイベントへの招待',
        'クレジット(企業名)の掲載',
        '要望に応じたタイアップ企画やコラボ可能'
      ],
      href: 'https://radineer.asia/contact',
      buttonText: 'お問い合わせはこちら',
      featured: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            会員プラン
          </h2>
          <p className="text-xl text-gray-600">
            あなたに合ったプランをお選びください
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.featured ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ¥{plan.price}
                  </span>
                  <span className="ml-2 text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`block w-full py-4 px-8 text-center font-bold rounded-full ${
                    plan.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>※ 価格は全て税抜表示です</p>
        </div>
      </div>
    </section>
  )
} 