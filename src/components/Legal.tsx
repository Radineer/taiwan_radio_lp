import Link from 'next/link'

export default function Legal() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            href="https://radineer.asia/legal/tokushoho"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
        </div>
      </div>
    </section>
  )
} 