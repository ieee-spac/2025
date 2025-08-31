'use client'

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { FaGlobe } from 'react-icons/fa'
import Image from 'next/image'
import type { ITEAM_MEMBER } from '@/content/constants'

export function TeamCard({ member }: { member: ITEAM_MEMBER }) {
  // Handle case where member might be undefined
  if (!member) {
    return null
  }

  return (
    <div className="group relative">
      {/* ROLE */}
      <div className="h-16 md:h-20 flex items-center justify-center mb-6">
        <h3 className="text-center text-xl md:text-2xl font-bold text-fuchsia-700 transition-all duration-300 group-hover:text-fuchsia-600 leading-tight">
          {member.role}
        </h3>
      </div>

      {/* CARD CONTAINER */}
      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:border-fuchsia-500/30 hover:-translate-y-2 h-80 md:h-96 flex flex-col">
        {/* ANIMATED BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-cyan-500/0 to-green-500/0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>

        {/* HEADSHOT CONTAINER */}
        <div className="relative flex justify-center mb-4 flex-shrink-0">
          <div className="relative w-32 h-32 md:w-36 md:h-36">
            {/* ANIMATED RING */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-spin-slow p-1">
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden ring-4 ring-border group-hover:ring-fuchsia-500/50 transition-all duration-500">
              <Image
                src={member.image || '/placeholder.svg?height=144&width=144&query=professional headshot'}
                alt={member.name}
                width={144}
                height={144}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>

            {/* INSTITUTION LOGO - Hidden by default, appears on hover */}
            {member.institution && (
              <a
                href={member.institution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-background rounded-full p-1.5 shadow-lg opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-200 hover:scale-110 z-20 cursor-pointer border border-border"
                aria-label={`Visit ${member.institution.name} website`}
              >
                <Image
                  src={member.institution.imageUrl || '/placeholder.svg?height=40&width=40&query=university logo'}
                  alt={`${member.institution.name} logo`}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </a>
            )}

            {/* YEAR STANDING - Hidden by default, appears on hover */}
            {member.yearStanding && (
              <div className="absolute -bottom-2 -right-2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted border-2 border-border group-hover:border-fuchsia-500 transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 delay-300 z-20">
                <span
                  className={`
                    ${
              member.yearStanding.startsWith('1')
                ? 'text-blue-400 group-hover:text-blue-300'
                : member.yearStanding.startsWith('2')
                  ? 'text-green-400 group-hover:text-green-300'
                  : member.yearStanding.startsWith('3')
                    ? 'text-yellow-400 group-hover:text-yellow-300'
                    : member.yearStanding.startsWith('4')
                      ? 'text-orange-400 group-hover:text-orange-300'
                      : 'text-purple-400 group-hover:text-purple-300'
              }
                    font-bold text-xs md:text-sm transition-all duration-300 group-hover:drop-shadow-lg
                  `}
                >
                  {member.yearStanding.slice(0, -2)}
                  <sup className="text-xs">{member.yearStanding.slice(-2)}</sup>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* NAME */}
        <h4 className="text-center text-lg md:text-xl font-bold text-green-400 mb-2 transition-all duration-300 group-hover:text-green-300 group-hover:drop-shadow-lg flex-shrink-0">
          {member.name}
        </h4>

        {/* PROGRAM */}
        <div className="flex-grow flex items-center justify-center mb-4 min-h-[3rem] md:min-h-[4rem]">
          <p className="text-center text-sm md:text-base text-muted-foreground transition-all duration-300 group-hover:text-foreground px-2 leading-tight">
            {member.programName}
          </p>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div className="flex justify-center space-x-1 md:space-x-4 flex-shrink-0 px-4 md:px-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted text-sky-400 border border-border transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-[1.02] md:hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30 hover:border-sky-400 cursor-pointer z-30"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xs md:text-lg" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted text-green-400 border border-border transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-[1.02] md:hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 hover:border-green-400 cursor-pointer z-30"
              aria-label="GitHub"
            >
              <FaGithub className="text-xs md:text-lg" />
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted text-purple-400 border border-border transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-[1.02] md:hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-400 cursor-pointer z-30"
              aria-label="Website"
            >
              <FaGlobe className="text-xs md:text-lg" />
            </a>
          )}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted text-pink-400 border border-border transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-[1.02] md:hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 hover:border-pink-400 cursor-pointer z-30"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xs md:text-lg" />
            </a>
          )}
        </div>

        {/* HOVER OVERLAY EFFECT */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-fuchsia-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  )
}
