import Link from 'next/link'

export default function Legal() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            href="https://radineer.asia/%e7%89%b9%e5%ae%9a%e5%95%86%e5%8f%96%e5%bc%95%e6%b3%95%e3%81%ab%e5%9f%ba%e3%81%a5%e3%81%8f%e8%a1%a8%e8%a8%98/"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
        </div>
      </div>
    </section>
  )
} 