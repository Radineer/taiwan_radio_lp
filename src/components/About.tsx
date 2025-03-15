import React from 'react'

export default function About() {
  const benefits = [
    '日台それぞれの最新情報、コアな文化や裏話が手に入る',
    '限定イベント・特別コンテンツが楽しめる',
    'メンバー同士の情報交換で、旅行やビジネスにも役立つネットワークが広がる'
  ]

  const targetAudience = [
    '日本在住で台湾に興味がある方、台湾好きの方',
    '台湾在住や在日台湾人の方で、日本との交流を深めたい方',
    'ラジオ番組の舞台裏やディープなトークを楽しみたい方',
    '吉村剛史氏や和田健一郎氏の取材などの活動を支援・応援したい方'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            台湾と日本をラジオでつなぐコミュニティ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            番組未公開のトークや、日台のリアルタイム情報を共有してファン同士が交流できる場所
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              サロンで得られること
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              こんな方におすすめ
            </h3>
            <ul className="space-y-4">
              {targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-gray-600">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 