export default function Features() {
  const features = [
    {
      title: 'アーカイブコンテンツが聴き放題',
      description: '聞き逃しをカバー。過去放送から人気回までいつでも聴取可能！'
    },
    {
      title: 'プレミアム向け特別コンテンツ',
      description: '番組では公開できないマル秘トークやゲスト対談など、ここでしか聴けない濃密エピソード'
    },
    {
      title: '日台コミュニティでの交流',
      description: '会員専用SNSグループでリアルタイムに情報交換。旅行プランやおすすめスポットを共有'
    },
    {
      title: 'パーソナリティとの距離感',
      description: 'トークテーマのリクエストや質問に直接回答！ファンミーティングや収録見学など、パーソナリティと近い距離でつながれる'
    },
    {
      title: '法人向け特典',
      description: '法人会員は企業名をクレジット掲載、PR効果も！日台関連ビジネスとのコラボや協賛イベントも検討可能'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">サロンの魅力</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
