import Image from 'next/image'

import logo from '@root/public/assets/twilight-design-system/spac_logo_year_stars.svg'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import ShineBorder from '@/components/twilight/shine-pulse/shine-pulse'
import { WarpBackground } from '@/components/twilight/warp-background/warp-background'

import { HERO, LINKS } from '@/content/constants'

export function Hero() {
  return (
  // Grid background container
  // <div className="min-h-screen flex justify-center items-center p-4 w-full dark:bg-black bg-white dark:bg-grid-green-600/[0.5] bg-grid-black/[0.2] overflow-none">
  // dark:bg-grid-green-600/[0.5] bg-grid-black/[0.2]

    <WarpBackground>
      <div
        id="home"
        className="overflow-x-clip flex h-screen w-full items-center justify-center p-4 "
      >
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black" /> */}
        {/* <div className="pointer-events-none absolute inset-0 flex h-screen items-center justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" /> */}

        {/* Center box */}
        <ShineBorder
          color={['hsl(var(--primary))', 'hsl(var(--warning))', 'hsl(var(--tertiary))']}
        >
          <main className="backdrop-blur-xs group flex h-fit w-full max-w-4xl flex-col items-center justify-center space-y-4 rounded-sm hover:border-primary px-4 py-8 transition-all duration-300 ease-in-out md:px-20 md:py-16">
            {/* Logo */}
            <Image
              priority
              src={logo}
              alt={HERO.IMAGE_ALT_TEXT}
              className="bobbing-animation-1 w-full max-w-lg transition-all duration-700 ease-in-out group-hover:drop-shadow-[0_0px_5px_rgba(0,202,255,1)] sm:max-w-xl"
            />

            {/* Text */}
            {/*           <SparklesText
            className="text-lg font-semibold md:text-2xl"
            colors={{ first: 'hsl(var(--primary))', second: 'hsl(var(--warning))' }}
            text={(
              <div className="flex flex-col items-center space-y-2 text-center">
                <p className="text-lg font-medium md:text-2xl">
                  {HERO.TITLE}
                </p>
                <p className="text-xs md:text-xl font-thin">
                  {HERO.DATE}
                  <sup>st</sup>
                  {' '}
                  |
                  {' '}
                  <a
                    href={HERO.LOCATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {HERO.LOCATION}
                  </a>
                </p>
              </div>
            )}
          /> */}
            <div
              className="text-lg font-semibold md:text-2xl"
            >
              <div className="flex flex-col items-center space-y-2 text-center">
                <p className="text-lg font-medium md:text-2xl">
                  {HERO.TITLE}
                </p>
                <p className="text-xs md:text-xl font-thin">
                  {HERO.DATE}
                  <sup>st</sup>
                  {' '}
                  |
                  {' '}
                  <a
                    href={HERO.LOCATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {HERO.LOCATION}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap md:text-nowrap w-full justify-center gap-2">
              <a
                href={LINKS.GALLERY}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyButton
                  text="View Gallery"
                />
              </a>
            </div>
          </main>
        </ShineBorder>
      </div>
    </WarpBackground>
  )
}
