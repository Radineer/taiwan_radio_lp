import Image from 'next/image'

export default function Team() {
  const members = [
    {
      name: '和田健一郎',
      role: 'メインパーソナリティ',
      description: '台湾日本Radio Expressのメインパーソナリティ。日台交流に情熱を注ぎ、現地の最前線から魅力を発信。SNS総フォロワー数多数。イベント出演多数。ファンとの近い距離感が人気の秘訣。',
      image: '/images/wada.jpg'
    },
    {
      name: '吉村剛史',
      role: '共同パーソナリティ',
      description: '共同パーソナリティ。日台をはじめ国際的な視点を持ち、深いトークが持ち味。取材経験豊富でバラエティにも精通。番組進行でも定評がある。',
      image: '/images/yoshimura.jpg'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            運営者紹介
          </h2>
          <p className="text-xl text-gray-600">
            日台をつなぐ架け橋として活動する私たちをご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 