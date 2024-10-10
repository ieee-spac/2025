import { LINKS } from '@/content/constants'

export function Agenda() {
  return (
    <div id="agenda" className="mx-auto mt-20 max-w-3xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">
        Agenda
      </h2>

      <div className="relative w-full h-0 pt-[141.4286%] pb-0 shadow-lg mt-6 mb-4 overflow-hidden rounded-lg transform-gpu">
        <iframe
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 border-none m-0 p-0"
          src={LINKS.AGENDA}
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  )
}
