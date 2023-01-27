import NavMain from '../../components/Nav/NavMain'
import NavTop from '../../components/Nav/NavTop'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import sectionHeaderBg from '../../assets/sectionHeaderBg.png'
import StepsOne from './StepsOne'
import CourseRegistration from './CourseRegistration'
import StepsTwo from './StepsTwo'
import CreditTimeLine from './CreditTimeLine'
import FaqUniversityCredits from './FaqUniversityCredits'
import Footer from '../../components/Footer/Footer'

const UniversityCredits = () => {
  return (
    <>
      <SectionHeader
        bgImg={sectionHeaderBg}
        sectionTitle='University Credits'
        child='University Credits'
      />
      <StepsOne />
      <CourseRegistration />
      <StepsTwo />
      <CreditTimeLine />
      <FaqUniversityCredits />
      <Footer />
    </>
  )
}

export default UniversityCredits
