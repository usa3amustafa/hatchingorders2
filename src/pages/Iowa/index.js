import Header from './Header'
import NewArrivals from './NewArrivals'
import MeetPathways from './MeetPathways'
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
      <DealsOfWeek className={'bgIowa'} />
      <Testimonials className={'bgIowa'} />
      <InstagramSection className={'bgIowa'} />
      <Footer className={'bgIowa'} />
    </>
  )
}

export default Home
