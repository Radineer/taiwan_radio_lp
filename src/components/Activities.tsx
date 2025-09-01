import Image from 'next/image'

export default function Activities() {
  const activities = [
    {
      title: 'ラジオ収録',
      description: '毎週、台湾の最新情報や文化について楽しく語り合っています。ゲストを招いて特別な話題も。',
      image: '/images/active1.jpg'
    },
    {
      title: '現地取材',
      description: '台湾各地を訪れ、魅力的なスポットや人々との出会いを取材。生の声をお届けします。',
      image: '/images/active2.jpg'
    },
    {
      title: 'イベント開催',
      description: 'リスナーの皆様との交流イベントや、台湾文化を体験できるワークショップを定期的に開催。',
      image: '/images/active3.jpg'
    },
    {
      title: 'コミュニティ交流',
      description: '日台のメンバーが自由に交流し、情報交換や文化理解を深めています。オンライン・オフライン問わず活発に活動中。',
      image: '/images/active4.jpg'
    },
    {
      title: '文化体験',
      description: '台湾の伝統文化や最新トレンドを体験できるワークショップやツアーを企画。より深い相互理解を目指しています。',
      image: '/images/active5.jpg'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            活動の様子
          </h2>
          <p className="text-xl text-gray-600">
            日台の架け橋として、様々な活動を展開しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 