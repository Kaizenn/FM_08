import Nav from '../components/sections/Nav'
import Hero from '../components/sections/Hero'
import Main from '../components/sections/Main'
import Footer from '../components/sections/Footer'

import { navData } from '../data/landingData'
import { heroData } from '../data/landingData'
import { mainData } from '../data/landingData'
import { footerData } from '../data/landingData'

import { AnimatePresence, motion } from 'framer-motion'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function LandingPage() {
  const overlayRef = useRef()
  const smoother = useRef()

  useGSAP(() => {
    // Intro fullscreen overlay animation
    gsap.to(overlayRef.current, {
      duration: 3,
      ease: 'expoScale(0.5,7,none)',
      '--hole-radius': '300vw',
      onComplete: () => {
        overlayRef.current?.remove()
      },
    })

    // ScrollSmoother avec wrapper & content bien définis
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
    })
  }, [])

  return (
    <>
      <div ref={overlayRef} className="overlay"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: [-25, 0], transition: { duration: 1, ease: 'easeInOut' } }}
              exit={{ opacity: 0 }}
            >
              <Nav {...navData} />
              <Hero {...heroData} />
              <Main {...mainData} />
              <Footer {...footerData} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
