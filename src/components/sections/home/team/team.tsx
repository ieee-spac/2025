import { TEAM_MEMBERS } from '@/content/constants'

import { TeamCard } from '@/components/sections/home/team/team-card'

export function Team() {
  return (
    <div id="team" className="mx-auto mt-20 max-w-3xl px-3 md:px-8">
      <h2 className="mb-10 text-5xl font-bold text-primary sm:text-6xl">
        Meet the Team
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => {
          return (
            <TeamCard key={member.name} member={member} />
          )
        })}
      </div>
    </div>
  )
}
