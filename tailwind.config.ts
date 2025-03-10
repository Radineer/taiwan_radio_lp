import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B3A', // メインカラー：エネルギッシュなオレンジ
          light: '#FFA67A', // ハイライト用の薄いオレンジ
          dark: '#E55A2B', // ホバー時などの濃いオレンジ
        },
        secondary: {
          DEFAULT: '#2C3E50', // サブカラー：濃紺系
          light: '#34495E', // 薄い濃紺
          dark: '#243342', // 濃い濃紺
        },
        accent: {
          red: '#D63E3E', // 日本を象徴する赤
          green: '#27873F', // 台湾を象徴する緑
        },
        surface: {
          DEFAULT: '#FFFFFF', // 基本背景色
          alt: '#F8F8F8', // セクション区切り用の薄いグレー
          dark: '#F3F4F6', // より濃いグレー
        },
        text: {
          DEFAULT: '#2C3E50', // 基本文字色
          light: '#4B5563', // 薄い文字色
          muted: '#6B7280', // さらに薄い文字色
        },
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'M PLUS 1p',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // H1
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '700' }], // H2
        'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // H3
        'body': ['1rem', { lineHeight: '1.7' }], // 本文
        'body-lg': ['1.125rem', { lineHeight: '1.7' }], // 大きめ本文
        'body-sm': ['0.875rem', { lineHeight: '1.7' }], // 小さめ本文
      },
      spacing: {
        'section': '5rem', // セクション間の余白
        'content': '2.5rem', // コンテンツ間の余白
      },
      borderRadius: {
        'cta': '9999px', // CTAボタンの角丸
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

export default config 