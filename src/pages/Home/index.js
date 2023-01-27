import NavTop from '../../components/Nav/NavTop'
import Header from './Header'
import NewArrivals from './NewArrivals'
import MeetPathways from './MeetPathways'
import CoursesGrid from './CoursesGrid'
import DealsOfWeek from './DealsOfWeek'
import Footer from '../../components/Footer/Footer'
import Testimonials from './Testimonials'
import InstagramSection from './InstagramSection'
import './home.css'

function Home() {
  return (
    <>
      <Header />
      <NewArrivals />
      <MeetPathways />
      <CoursesGrid />
      <DealsOfWeek />
      <Testimonials />
      <InstagramSection />
      <Footer />
    </>
  )
}

export default Home
