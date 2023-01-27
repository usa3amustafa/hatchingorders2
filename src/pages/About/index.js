import NavMain from '../../components/Nav/NavMain'
import NavTop from '../../components/Nav/NavTop'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import OurMission from './OurMission'
import CoreValues from './CoreValues'
import OurStory from './OurStory'
import OurTeam from './OurTeam'
import Footer from '../../components/Footer/Footer'

import { sectionHeaderData } from './aboutData'

function About() {
  return (
    <>
      <SectionHeader
        bgImg={sectionHeaderData.bgImg}
        sectionTitle={sectionHeaderData.title}
        child='About'
      />
      <OurMission />
      <CoreValues />
      <OurStory />
      <OurTeam />
      <Footer />
    </>
  )
}

export default About
