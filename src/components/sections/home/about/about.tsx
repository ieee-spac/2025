'use client'

import Image from 'next/image'
// import CountUp from 'react-countup'

/* import exclusive_masterclass_image from '@root/public/assets/exclusive_masterclass_image.svg'
 * import networking_booths_image from '@root/public/assets/networking_booths_image.svg'
 * import presentation_section_image from '@root/public/assets/presentation_section_image.svg'
 * import professional_1_on_1_image from '@root/public/assets/professional_1_on_1_image.svg'
 * import workshops_image from '@root/public/assets/workshops_image.svg' */
import { Bubble } from '@/components/sections/home/about/bubble'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'

import { ABOUT, LINKS } from '@/content/constants'

// Data for "A typical SPAC" section Items
/* const sections = [
 *   {
 *     title: 'Presentation Section',
 *     description:
 *       'A dynamic opening with key speakers introducing the event\'s themes and goals.',
 *     imgSrc: presentation_section_image,
 *     imgAlt: 'Presentation',
 *   },
 *   {
 *     title: 'Professional 1:1',
 *     description:
 *       'Engage in personalized discussions with industry professionals tailored to your career interests.',
 *     imgSrc: professional_1_on_1_image,
 *     imgAlt: 'Professional Conversation',
 *   },
 *   {
 *     title: 'Exclusive Masterclass',
 *     description:
 *       'Interactive sessions with experts to deepen your knowledge and enhance your skills.',
 *     imgSrc: exclusive_masterclass_image,
 *     imgAlt: 'Masterclass',
 *   },
 *   {
 *     title: 'Workshops',
 *     description:
 *       'Hands-on workshops designed to showcase practical skills and industry insights.',
 *     imgSrc: workshops_image,
 *     imgAlt: 'Workshops',
 *   },
 *   {
 *     title: 'Networking Booths',
 *     description:
 *       'Explore potential career paths and company cultures directly from the insiders.',
 *     imgSrc: networking_booths_image,
 *     imgAlt: 'Networking',
 *   },
 * ] */

// Data for the stat bubbles
/* const statData: { className: string, number: number, label: string, color: [string, string], size: string }[] = [
 *   {
 *     className: 'bobbing-animation-1 aspect-square relative flex flex-start',
 *     number: 100,
 *     label: 'Companies',
 *     color: ['#FFD100', '#DE9403'],
 *     size: '90%',
 *   },
 *   {
 *     className: 'bobbing-animation-4 aspect-square self-end relative -bottom-4 -left-1 sm:bottom-0 sm:left-0',
 *     number: 300,
 *     label: 'Attendees',
 *     color: ['#03A6DE', '#027AB3'],
 *     size: '65%',
 *   },
 *   {
 *     className: 'bobbing-animation-2 aspect-square relative -left-10 sm:-left-10',
 *     number: 200,
 *     label: 'Students',
 *     color: ['#77DD77', '#03A63C'],
 *     size: '50%',
 *   },
 *
 *   {
 *     className: 'bobbing-animation-3 aspect-square self-end relative -left-14 sm:-left-20 bottom-[20%]',
 *     number: 9,
 *     label: 'Years',
 *     color: ['#FFA500', '#DE6003'],
 *     size: '40%',
 *   },
 * ] */

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
        <div className="flex w-full h-[45vw] max-h-80 ml-6 md:ml-10">
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
