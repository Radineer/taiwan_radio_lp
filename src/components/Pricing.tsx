import React from 'react'

const plans = [
  {
    name: 'スタンダード会員',
    price: '500',
    period: '月額',
    features: [
      'ラジオアーカイブコンテンツ配布',
    ],
    buttonText: '今すぐ登録する',
    buttonLink: 'https://buy.stripe.com/eVa9BY2hagnXeQgeUV',
    popular: false
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
    buttonText: '今すぐ登録する',
    buttonLink: 'https://buy.stripe.com/5kA5lIaNGgnX9vW8ww',
    popular: true
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
    buttonText: 'お問い合わせはこちら',
    buttonLink: 'https://radineer.asia/contact',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          会員プラン
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm">
                  人気
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text">
                    ¥{plan.price}
                  </span>
                  <span className="text-text-light">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-text-light">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.buttonLink}
                  className={`block text-center px-6 py-3 rounded-full text-white transition-colors ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-dark'
                      : 'bg-secondary hover:bg-secondary-light'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 