import Number from '../ui/Number'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export default function Main({
  number,
  imageWomenVideochatting,
  imageWomanInVideocall,
  imageMenInMeeting,
  imageManTexting,
  subtitle,
  title,
  desc,
}) {
  const mainRef = useRef()
  const textRef = useRef()

  useGSAP(
    () => {
      const images = gsap.utils.toArray('img')

      gsap.fromTo(
        images,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: mainRef.current,
            end: 'top 20%',
            toggleActions: 'play none none none',
            scrub: true,
          },
        },
      )

      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            end: 'top 50%',
            toggleActions: 'play none none none',
            scrub: true,
            // markers: true,
          },
        },
      )
    },
    { scope: mainRef },
  )

  return (
    <div className="px-8 pt-8 pb-16">
      <Number number="01" />
      <div className="mx-auto my-16 flex max-w-6xl flex-wrap gap-4 md:flex-nowrap" ref={mainRef}>
        <img
          className="w-[calc(50%-0.5rem)] translate-x-[-150px] rounded-lg opacity-0"
          src={imageWomenVideochatting}
          alt="Women Videochatting"
        />
        <img
          className="w-[calc(50%-0.5rem)] translate-x-[-150px] rounded-lg opacity-0"
          src={imageWomanInVideocall}
          alt="Woman In Videocall"
        />
        <img
          className="w-[calc(50%-0.5rem)] translate-x-[-150px] rounded-lg opacity-0"
          src={imageMenInMeeting}
          alt="Men In Meeting"
        />
        <img
          className="w-[calc(50%-0.5rem)] translate-x-[-150px] rounded-lg opacity-0"
          src={imageManTexting}
          alt="Man Texting"
        />
      </div>
      <div className="mx-auto max-w-[35rem] text-center" ref={textRef}>
        <h3 className="text-preset3 mb-4 text-cyan-600 uppercase">{subtitle}</h3>
        <h2 className="text-preset2 mx-auto mb-8 max-w-[28rem] text-slate-900">{title}</h2>
        <p className="text-preset4">{desc}</p>
      </div>
    </div>
  )
}
