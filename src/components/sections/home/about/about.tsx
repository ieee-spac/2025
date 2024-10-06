'use client'

import Image from 'next/image'
// import CountUp from 'react-countup'

import { Bubble } from '@/components/sections/home/about/bubble'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'

import { ABOUT, LINKS } from '@/content/constants'

// Render events in the "A typical SPAC" section
function SectionItem({
  title,
  description,
  imgSrc,
  imgAlt,
  isReversed = false,
}: {
  title: string
  description: string
  imgSrc: string
  imgAlt: string
  isReversed: boolean
}) {
  return (
    <div
      className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} w-full items-center justify-between`}
    >
      {/* Text Container */}
      <div className="flex w-1/2 flex-col justify-center">
        <h4 className="text-xl font-semibold text-base-content sm:text-2xl md:text-3xl">
          {title}
        </h4>
        <p className="text-sm dark:text-stone-400 text-stone-600 sm:text-base md:text-lg">
          {description}
        </p>
      </div>

      {/* Image Container */}
      <div
        className={`flex w-1/2 ${isReversed ? 'mr-4 justify-start' : 'justify-end'} items-center `}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="h-auto w-full max-w-[160px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  )
}

export function About() {
  return (
    <article
      id="about"
      className="overflow-none mx-auto mt-20 max-w-3xl space-y-10 px-3 md:px-8"
    >
      <section className="space-y-8">
        <h2 className="text-5xl font-bold text-primary sm:text-6xl">{ABOUT.TITLE}</h2>
        <p>{ABOUT.PARAGRAPHS[0]}</p>
        <p>{ABOUT.PARAGRAPHS[1]}</p>

        {/* Colour Bubbles */}
        <div className="flex w-full h-[45vw] max-h-80 md:ml-10">
          {ABOUT.STAT_BUBBLES.map((item, index) => (
            <Bubble
              key={index}
              className={item.className}
              number={item.number}
              label={item.label}
              color={[item.color[0], item.color[1]]}
              size={item.size}
            />
          ))}
        </div>

        <p className="text-base-content">{ABOUT.PARAGRAPHS[2]}</p>
      </section>

      {/* A typical SPAC section */}
      <section className="space-y-8">
        <h3 className="pb-6 text-3xl font-semibold sm:text-4xl md:text-5xl">{ABOUT.SUBTITLE}</h3>
        {ABOUT.SECTIONS.map((section, index) => (
          <SectionItem
            key={section.title}
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            isReversed={index % 2 !== 0}
          />
        ))}
        <p>{ABOUT.PARAGRAPHS[3]}</p>
      </section>
      <div className="flex flex-wrap lg:flex-nowrap md:text-nowrap w-full justify-center gap-2">
        <a
          href={LINKS.SPAC_TICKETS}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton
            text="Registration (SPAC)"
          />
        </a>
        <a
          href={LINKS.SPAC_PLUS_AGM_TICKETS}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton
            text="Registration (SPAC+AGM)"
          />
        </a>
      </div>
    </article>
  )
}
