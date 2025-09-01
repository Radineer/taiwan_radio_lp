export default function Team() {
  const team = [
    {
      name: '和田健一郎',
      role: 'メインパーソナリティ',
      description: '1979年沖縄県石垣出身　中央大学法学部卒　ラジオ成田無線従事者（第一級陸上無線技術士）　陸上自衛隊予備自衛官（予備一等陸曹）元千葉県白井市議 放送局を管理する国家資格も持っております。学生時代、李登輝元総統の日本入国が難しかった頃大学でオンラインによる講演会を企画したことがきっかけで台湾に関わる人生となりました。大手地上波ではなかなか放送ができないことも含め最新の台湾情報をお届けします。ぜひともご支援お願いします！'
    },
    {
      name: '吉村剛史',
      role: '共同パーソナリティ',
      description: '1965年、兵庫県出身。元産経新聞台北支局長、台湾政治大学外交部フェロー 近著に「アジア血風録」（MdN新書）。雑誌やウェブに執筆多数。特技 無人航空機操縦士ラジオ１００年の節目を迎えた台湾と日本のあらたな交流の支援をお願いします。２０２５年３月日本、同６月に台湾でラジオは１００年の節目を迎えました。東日本大震災以降、災害時の情報伝達手段としてラジオが再評価される中、ラジオを通した日台交流を更に進めてまいります。'
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
