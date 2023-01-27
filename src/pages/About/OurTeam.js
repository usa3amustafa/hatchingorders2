import TeamMember from './TeamMember'
import { ourTeamData } from './aboutData'

const OurTeam = () => {
  return (
    <section>
      <div className='container ourTeam'>
        <h2 className='ourTeamTitle'>{ourTeamData.title}</h2>

        <div className='teamMembers'>
          {ourTeamData.teamMembersData.map(item => {
            return (
              <TeamMember
                key={item.id}
                bgImg={item.img}
                title={item.title}
                subTitle={item.subTitle}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
