import { Routes, Route } from 'react-router-dom'

import Home from '../Home'
import Arizona from '../Arizona'
import Iowa from '../Iowa'
import About from '../About'
import GettingStarted from '../GettingStarted/GettingStarted'
import DataDataData from '../DataDataData'
import TimeManagement from '../TimeManagement'
import Actionplans from '../Actionplans'
import PostsecondaryReadiness from '../PostsecondaryReadiness'
import Purposefulprograms from '../Purposefulprograms'
import Programdevelopment from '../Programdevelopment'
import InternationalSchoolCounseling from '../InternationalSchoolCounseling'
import UniversityCredits from '../UniversityCredits'
import ResetPassword from '../ResetPassword/ResetPassword'
import Comingsoon from '../Comingsoon/Comingsoon'

const AppMain = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/arizona' element={<Arizona />}></Route>
      <Route path='/iowa' element={<Iowa />}></Route>

      <Route path='/about' element={<About />}></Route>
      <Route path='/getting-started' element={<GettingStarted />}></Route>
      <Route path='/resetpassword' element={<ResetPassword />}></Route>
      <Route path='/datadatadata' element={<DataDataData />}></Route>
      <Route path='/timemanagement' element={<TimeManagement />}></Route>
      <Route path='/actionplans' element={<Actionplans />}></Route>
      <Route
        path='/postsecondaryreadiness'
        element={<PostsecondaryReadiness />}
      ></Route>
      <Route
        path='/programdevelopment'
        element={<Programdevelopment />}
      ></Route>
      <Route
        path='/purposefulprograms'
        element={<Purposefulprograms />}
      ></Route>
      <Route
        path='/internationalschoolcounseling'
        element={<InternationalSchoolCounseling />}
      ></Route>
      <Route path='/universitycredits' element={<UniversityCredits />}></Route>
      <Route path='/comingsoon' element={<Comingsoon />}></Route>
    </Routes>
  )
}
export default AppMain
