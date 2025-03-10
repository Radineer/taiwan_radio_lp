'use client'
import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Plans from '@/components/Plans'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Legal from '@/components/Legal'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Plans />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
      <Legal />
    </main>
  )
}
