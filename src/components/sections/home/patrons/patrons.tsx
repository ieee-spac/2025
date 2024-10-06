'use client'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { LogoSection } from '@/components/sections/home/patrons/patrons-tier'
import { Spotlight } from '@/components/twilight/spotlight/spotlight'

import { LINKS, PATRONS, PATRONS_DATA, TIER_NAME, TIER_PROPERTIES } from '@/content/constants'

export function Patrons() {
  return (
    <div id={PATRONS.ID} className="mx-auto mt-20 max-w-3xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">{PATRONS.TITLE}</h2>
      <Spotlight
        className="-left-20 top-[150rem] md:left-10 md:top-[140rem]"
        fill="LightGoldenRodYellow"
      />
      <>
        {Object.values(TIER_NAME).map(tier => (
          <LogoSection
            key={tier}
            title={tier}
            titleColor={TIER_PROPERTIES[tier].titleColor}
            logos={PATRONS_DATA[tier]}
            gradientClass={TIER_PROPERTIES[tier].gradientClass}
          />
        ))}
      </>
      <span className="inline-flex w-full justify-center">
        <a
          href={LINKS.PATRONAGE_PACKAGE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton text="Become a Patron" />
        </a>
      </span>
    </div>
  )
}
