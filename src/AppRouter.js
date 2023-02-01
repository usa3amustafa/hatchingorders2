import Home from './pages/Home'
import About from './pages/About'
import GettingStarted from './pages/GettingStarted/GettingStarted'
import DataDataData from './pages/DataDataData'
import DataDataDataArizona from './pages/DataDataDataArizona'
import SchoolCounseling from './pages/InternationalSchoolCounseling'
import SchoolCounselingArizona from './pages/InternationalSchoolCounselingArizona'
import TimeManagement from './pages/TimeManagement'
import TimeManagementArizona from './pages/TimeManagementArizona'
import Actionplans from './pages/Actionplans'
import ActionplansArizona from './pages/ActionplansArizona'
import PostsecondaryReadiness from './pages/PostsecondaryReadiness'
import PostsecondaryReadinessArizona from './pages/PostsecondaryReadinessArizona'
import Purposefulprograms from './pages/Purposefulprograms'
import PurposefulprogramsArizona from './pages/PurposefulprogramsArizona'
import Programdevelopment from './pages/Programdevelopment'
import ProgramdevelopmentArizona from './pages/ProgramdevelopmentArizona'
import UniversityCredits from './pages/UniversityCredits'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Iowa from './pages/Iowa'
import Arizona from './pages/Arizona'
import { Routes, Route } from 'react-router-dom'

export const HomeRouter = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/getting-started' element={<GettingStarted />}></Route>
      <Route path='/reset-password' element={<ResetPassword />}></Route>
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
        element={<SchoolCounseling />}
      ></Route>
      <Route path='/universitycredits' element={<UniversityCredits />}></Route>
    </Routes>
  )
}

export const IowaRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Iowa />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/getting-started' element={<GettingStarted />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
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
          element={<SchoolCounseling />}
        ></Route>
        <Route
          path='/universitycredits'
          element={<UniversityCredits />}
        ></Route>
      </Routes>
    </>
  )
}

export const ArizonaRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Arizona />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/getting-started' element={<GettingStarted />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/datadatadata' element={<DataDataDataArizona />}></Route>
        <Route
          path='/timemanagement'
          element={<TimeManagementArizona />}
        ></Route>
        <Route path='/actionplans' element={<ActionplansArizona />}></Route>
        <Route
          path='/postsecondaryreadiness'
          element={<PostsecondaryReadinessArizona />}
        ></Route>
        <Route
          path='/programdevelopment'
          element={<ProgramdevelopmentArizona />}
        ></Route>
        <Route
          path='/purposefulprograms'
          element={<PurposefulprogramsArizona />}
        ></Route>
        <Route
          path='/internationalschoolcounseling'
          element={<SchoolCounselingArizona />}
        ></Route>
        <Route
          path='/universitycredits'
          element={<UniversityCredits />}
        ></Route>
      </Routes>
    </>
  )
}
