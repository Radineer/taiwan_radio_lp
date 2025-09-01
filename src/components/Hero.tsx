import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/hero-bg.jpg"
          alt="台湾と日本の街並み"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 section-container text-center text-white">
        <div className="mb-6">
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            ラジオ番組台湾日本Radio Express 友の会―番組運営の応援をお願いします！
          </p>
          <p className="text-sm sm:text-base">
            毎週月JST２０時より国際ラジオ放送株式会社（ラジオ成田）FM８３，７MHｚにて放送中！
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
          日台をつなぐ架け橋へ
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-4">
            台湾日本Radio Express オンラインサロンでしか体験できないクロスカルチャーの世界
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto">
          ラジオのアーカイブ、限定トーク、日台交流イベント…今すぐ新しい世界を体験しよう！
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://buy.stripe.com/eVa9BY2hagnXeQgeUV"
            className="button-primary"
          >
            スタンダード会員になる（500円/月）
          </Link>
          
          <Link
            href="https://buy.stripe.com/5kA5lIaNGgnX9vW8ww"
            className="button-secondary"
          >
            プレミアム会員になる（5,000円/月）
          </Link>
          
          <Link
            href="https://radineer.asia/contact"
            className="button-outline text-white hover:bg-white hover:text-blue-600"
          >
            法人会員プランを検討する
          </Link>
        </div>
      </div>
    </section>
  )
} 