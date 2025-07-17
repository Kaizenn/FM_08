import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Button from '../ui/Button'

gsap.registerPlugin(useGSAP, SplitText)

export default function Hero({
  imageHeroLeftDesktop,
  imageHeroRightDesktop,
  imageHeroTablet,
  titleLine1,
  titleLine2,
  desc,
}) {
  const titleRef = useRef()
  const subtitleRef = useRef()
  const buttonsRef = useRef()

  useGSAP(() => {
    const split = new SplitText(titleRef.current, { type: 'words' })
    const splitSubtitle = new SplitText(subtitleRef.current, { type: 'chars' })

    const tl = gsap.timeline()

    tl.from(
      split.words,
      {
        y: -100,
        opacity: 0,
        rotation: () => gsap.utils.random(-80, 80),
        duration: 0.7,
        ease: 'back',
        stagger: 0.15,
      },
      0,
    )

    tl.from(
      splitSubtitle.chars,
      {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: 'power4',
        stagger: 0.015,
      },
      '-=1',
    )

    tl.from(
      buttonsRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: 'power2.out',
      },
      '-=1.5',
    )
  }, [])
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden py-16 xl:min-h-[48rem]">
        <div className="flex justify-center xl:justify-between">
          <img className="mb-12 max-w-[115vw] xl:hidden" src={imageHeroTablet} alt="Hero Image" />
          <img
            className="ml-[-1.5rem] hidden xl:block"
            src={imageHeroLeftDesktop}
            alt="Hero Image"
          />
          <img
            className="relative top-[3.5rem] mr-[-1.5rem] hidden xl:block"
            src={imageHeroRightDesktop}
            alt="Hero Image"
          />
        </div>
        <div className="mx-auto max-w-[32rem] px-8 pb-8 text-center xl:mt-[-17rem]">
          <h1 ref={titleRef} className="text-preset1 mx-auto pb-6 text-slate-900">
            {titleLine1} <br /> {titleLine2}
          </h1>
          <p ref={subtitleRef} className="text-preset4 pb-6">
            {desc}
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-col items-center gap-4 md:flex-row md:justify-center"
          >
            <Button
              label="Download"
              label2="v1.3"
              textColor="text-white"
              label2Color="text-cyan-300"
              bgColor="bg-cyan-600"
              hoverBgColor="hover:bg-cyan-500"
            />
            <Button
              label="What is it?"
              textColor="text-white"
              bgColor="bg-purple-600"
              hoverBgColor="hover:bg-purple-500"
            />
          </div>
        </div>
      </div>
    </>
  )
}
