import { LINKS } from '@/content/constants'

export function Agenda() {
  return (
    <div id="agenda" className="mx-auto mt-20 w-full max-w-7xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">
        Agenda
      </h2>

      <div className="relative w-full shadow-lg mt-6 mb-4 overflow-hidden rounded-lg">
        <iframe
          className="w-full h-[500px] sm:h-[600px] md:h-[700px] border-none rounded-lg"
          src={LINKS.AGENDA}
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>

  )
}
