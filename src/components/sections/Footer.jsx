import Button from '../ui/Button'
import Number from '../ui/Number'
export default function Footer({
  number,
  imageFooterDesktop,
  imageFooterTablet,
  imageFooterMobile,
  title,
  desc,
}) {
  return (
    <>
      <Number number="02" />
      <div className="relative mt-[-1.85rem]">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={imageFooterDesktop} media="(min-width: 80rem)" />
            <source srcSet={imageFooterTablet} media="(min-width: 48rem)" />
            <img
              className="z-0 h-full w-full object-cover object-top"
              src={imageFooterMobile}
              alt="Footer Image"
            />
          </picture>
          <div className="absolute inset-0 z-10 bg-[#4d97a9de]"></div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-[35rem] flex-col items-center gap-6 px-8 py-17 text-center text-white xl:max-w-6xl xl:flex-row xl:justify-between xl:text-left">
          <h2 className="text-preset2 xl:max-w-[22rem]">{title}</h2>
          <p className="xl:max-w-[20rem]">{desc}</p>
          <Button
            label="Download"
            label2="v1.3"
            textColor="text-white"
            label2Color="text-purple-300"
            bgColor="bg-purple-600"
            hoverBgColor="hover:bg-purple-500"
          />
        </div>
      </div>
    </>
  )
}
