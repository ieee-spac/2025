import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/components/utils/cn'

import { FOOTER } from '@/content/constants'

function DEFAULT_LOGO_IMAGE() {
  return (
    <Image
      src={FOOTER.LOGO}
      alt="IEEE SPAC Footer Logo"
      className="h-6 w-auto transition-all duration-700 hover:scale-105"
      width={0}
      height={0}
    />
  )
}

export function Footer({
  Logo = DEFAULT_LOGO_IMAGE,
  socialMediaData = FOOTER.SOCIAL_MEDIA,
}: {
  Logo?: React.ComponentType
  socialMediaData?: {
    name: string
    url: string
    Icon: React.ComponentType
    className: string
  }[]
}) {
  return (
    <footer className="border-t-[0.25px] border-secondary text-neutral-content transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
      <div className="mx-auto w-full max-w-7xl px-3 py-4 md:px-8">

        {/* LOGO and SOCIAL MEDIA ICONS in one row */}
        <div className="flex flex-wrap justify-between items-start">
          {/* LOGO */}
          <aside className="flex flex-col">
            <Link href="/" className="scroll-smooth">
              <Logo />
            </Link>
            <p>{FOOTER.COPYRIGHT_TEXT}</p>
          </aside>

          {/* SOCIAL MEDIA ICONS */}
          <nav className="flex flex-wrap justify-center 2xs:justify-end">
            {socialMediaData.map(({ name, url, Icon, className }) => (
              <a
                key={name}
                aria-label={`${name} Link`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('transition-all duration-700 hover:scale-125 p-4 text-2xl', className)}
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>

        {/* CREDITS */}
        <div className="mt-6 text-sm md:text-center">
          <p>
            Inspired by the
            {' '}
            <a
              href="https://www.figma.com/design/rxRdlFbCkzJDezvIPPaQvo/IEEE-SPAC-2024?node-id=902-880&t=ZldInFyhfowPbI3q-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline transition ease-in-out duration-700"
            >
              2022 SPAC Website
            </a>
            .
            Brand Cover made with 💙 by
            {
              ' '
            }
            <a
              href="https://www.linkedin.com/in/aashna-verma-000/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-auxiliary
font-bold transition ease-in-out duration-700
                     "
            >
              Aashna Verma
            </a>
            .
            Re-designed & developed with 🧡 by
            {
              ' '
            }
            <a
              href="https://www.linkedin.com/in/mfarabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warning font-bold transition ease-in-out duration-700"
            >
              Mumtahin Farabi
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
