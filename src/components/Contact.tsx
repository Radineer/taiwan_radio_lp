export default function Contact() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
            お問い合わせ
          </h2>
          <p className="text-lg text-text-light mb-12">
            サロンについてのご質問やご不明な点がございましたら、
            お気軽にお問い合わせください。
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="お名前"
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="メッセージ"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-colors w-full md:w-auto"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 