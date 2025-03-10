export default function Team() {
  const team = [
    {
      name: '和田健一郎',
      role: 'メインパーソナリティ',
      description: '台湾日本Radio Expressのメインパーソナリティ。日台交流に情熱を注ぎ、現地の最前線から魅力を発信。SNS総フォロワー数多数。イベント出演多数。ファンとの近い距離感が人気の秘訣。'
    },
    {
      name: '吉村剛史',
      role: '共同パーソナリティ',
      description: '共同パーソナリティ。日台をはじめ国際的な視点を持ち、深いトークが持ち味。取材経験豊富でバラエティにも精通。番組進行でも定評がある。'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">運営者紹介</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full">
                {/* プレースホルダー画像 - 実際の写真に置き換え予定 */}
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
