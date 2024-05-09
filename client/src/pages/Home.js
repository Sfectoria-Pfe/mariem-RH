import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='overflow-hidden'>
    <Hero />
    <About />
    <Features />
    <Testimonials />
   
  </div>
  )
}
