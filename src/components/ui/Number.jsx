import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export default function Number({ number }) {
  const numberBgRef = useRef()
  const numberBg2Ref = useRef()

  useGSAP(() => {
    ;(gsap.fromTo(
      numberBgRef.current,
      {
        width: '0',
        height: '0',
      },
      {
        ease: 'expoScale(0.5,7,none)',
        width: '6rem',
        height: '6rem',
        scrollTrigger: {
          trigger: numberBgRef.current,
          end: 'bottom 50%',
          toggleActions: 'play none none none',
          scrub: true,
        },
      },
    ),
      gsap.fromTo(
        numberBg2Ref.current,
        {
          width: '0',
          height: '0',
        },
        {
          ease: 'expoScale(0.5,7,none)',
          width: '8rem',
          height: '8rem',
          scrollTrigger: {
            trigger: numberBg2Ref.current,
            start: 'start 100%',
            toggleActions: 'play none none none',
            scrub: true,
          },
        },
      ))
  })

  return (
    <div className="relative z-100 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <div ref={numberBg2Ref} className="absolute z-0 mt-20 rounded-full bg-purple-600"></div>
        <div ref={numberBgRef} className="absolute z-0 mt-20 rounded-full bg-cyan-600"></div>
        <div className="h-20 w-0.25 bg-slate-300"></div>
        <div className="text-preset5 relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-[#fafafa] text-slate-600">
          {number}
        </div>
      </div>
    </div>
  )
}
