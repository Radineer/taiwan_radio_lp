import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'スタンダード会員',
      price: '500',
      features: [
        'ラジオアーカイブコンテンツ配布'
      ],
      buttonText: '今すぐ登録する',
      buttonLink: 'https://buy.stripe.com/eVa9BY2hagnXeQgeUV',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'プレミアム会員',
      price: '5,000',
      features: [
        'ラジオアーカイブコンテンツ配布',
        '特別コンテンツの配布やイベントへの招待',
        'クレジット(名前)の掲載'
      ],
      buttonText: '今すぐ登録する',
      buttonLink: 'https://buy.stripe.com/5kA5lIaNGgnX9vW8ww',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      name: '法人会員',
      price: '50,000',
      features: [
        'ラジオアーカイブコンテンツ配布',
        '特別コンテンツの配布やイベントへの招待',
        'クレジット(企業名)の掲載',
        '要望に応じたタイアップ企画やコラボ可能'
      ],
      buttonText: 'お問い合わせはこちら',
      buttonLink: 'https://radineer.asia/contact',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">会員プラン・料金</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="border rounded-lg p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-8">
                ¥{plan.price}
                <span className="text-base font-normal text-gray-600">/月（税抜）</span>
              </p>
              
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-4">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={plan.buttonLink}
                className={`${plan.buttonColor} text-white text-center px-6 py-3 rounded-full font-semibold transition-colors`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
