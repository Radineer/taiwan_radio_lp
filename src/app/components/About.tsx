export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">サロン概要</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">コンセプト・目的</h3>
            <p className="text-lg mb-4">「台湾と日本をラジオでつなぐコミュニティ」</p>
            <p className="text-lg mb-8">「番組未公開のトークや、日台のリアルタイム情報を共有してファン同士が交流できる場所」</p>
            
            <h3 className="text-2xl font-bold mb-6">サロンで得られること</h3>
            <ul className="list-disc list-inside text-lg space-y-4 mb-8">
              <li>日台それぞれの最新情報、コアな文化や裏話が手に入る</li>
              <li>限定イベント・特別コンテンツが楽しめる</li>
              <li>メンバー同士の情報交換で、旅行やビジネスにも役立つネットワークが広がる</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">こんな方におすすめ</h3>
            <ul className="list-disc list-inside text-lg space-y-4">
              <li>日本在住で台湾に興味がある方、台湾好きの方</li>
              <li>台湾在住や在日台湾人の方で、日本との交流を深めたい方</li>
              <li>ラジオ番組の舞台裏やディープなトークを楽しみたい方</li>
              <li>和田健一郎氏の活動を支援・応援したい方</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
