import { Header } from '@/components/layout/header/header'
import { Hero } from '@/components/sections/home/hero/hero'
import { About } from '@/components/sections/home/about/about'
import { PreviousPatrons } from '@/components/sections/home/previous-patrons/previous-patrons'
import { Patrons } from '@/components/sections/home/patrons/patrons'
import { Agenda } from '@/components/sections/home/agenda/agenda'
import { Team } from '@/components/sections/home/team/team'
import { Contact } from '@/components/sections/home/contact/contact'
import { Footer } from '@/components/layout/footer/footer'

import { HEADER } from '@/content/constants'

export default function HomePage() {
  return (
    <>
      <Header
        logo={HEADER.IMAGE_URL}
        links={HEADER.NAV_LINKS}
      />
      <Hero />
      <About />
      <Patrons />
      <PreviousPatrons />
      <Agenda />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
