import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import { FaGlobe } from 'react-icons/fa'

import Image from 'next/image'
import type { ITEAM_MEMBER } from '@/content/constants'

export function TeamCard({ member }: { member: ITEAM_MEMBER }) {
  return (
    <div key={member.name}>
      {/* ROLE */}
      <h3 className="text-center text-2xl font-bold text-fuchsia-700">
        {member.role}
      </h3>

      <div className="h-full">
        {/* HEADSHOT */}
        <div className="relative my-4 w-full flex justify-center">
          <div className="w-36 h-36 rounded-full relative">
            <Image
              src={member.image}
              alt={member.name}
              width={144}
              height={144}
              className="rounded-full"
            />
            {/* INSTITUTION LOGO */}
            {member.institution && (
              <div className="absolute top-0 right-0 transform translate-x-1/5 -translate-y-1/4 w-1/5">
                <Image
                  src={member.institution.imageUrl}
                  alt={`${member.institution.name} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            )}

            {/* YEAR STANDING */}
            {member.yearStanding && (
              <div className="absolute bottom-0 right-0 transform translate-x-[10%] translate-y-[10%] flex items-center text-sm">
                <span
                  className={`
              ${
              member.yearStanding.startsWith('1')
                ? 'text-primary'
                : member.yearStanding.startsWith('2')
                  ? 'text-green-500'
                  : member.yearStanding.startsWith('3')
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : member.yearStanding.startsWith('4')
                      ? 'text-warning'
                      : 'text-purple-400'
              }
              font-bold
            `}
                >
                  {/* Split the number and suffix */}
                  {member.yearStanding.slice(0, -2)}
                  <sup>{member.yearStanding.slice(-2)}</sup>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* NAME */}
        <p className="text-center text-lg font-bold text-green-600 dark:text-tertiary text-nowrap">
          {member.name}
        </p>

        {/* PROGRAM */}
        <p className="text-center text-sm">{member.programName}</p>

        {/* SOCIAL MEDIA LINKS */}
        <div className="mt-4 flex justify-center space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 trasition-all duration-700 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600"
              aria-label="Website"
            >
              <FaGlobe />
            </a>
          )}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
