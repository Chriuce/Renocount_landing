'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
} 