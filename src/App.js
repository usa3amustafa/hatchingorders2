import Home from './pages/Home';
import Arizona from './pages/Arizona';
import Iowa from './pages/Iowa';

import About from './pages/About';
import GettingStarted from './pages/GettingStarted/GettingStarted';
import DataDataData from './pages/DataDataData';
import TimeManagement from './pages/TimeManagement';
import Actionplans from './pages/Actionplans';
import PostsecondaryReadiness from './pages/PostsecondaryReadiness';
import Purposefulprograms from './pages/Purposefulprograms';
import Programdevelopment from './pages/Programdevelopment';
import UniversityCredits from './pages/UniversityCredits';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/';

import { AppProvider } from './context/AppContext';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/arizona" element={<Arizona />}></Route>
          <Route path="/iowa" element={<Iowa />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/getting-started" element={<GettingStarted />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/datadatadata" element={<DataDataData />}></Route>
          <Route path="/timemanagement" element={<TimeManagement />}></Route>
          <Route path="/actionplans" element={<Actionplans />}></Route>
          <Route
            path="/postsecondaryreadiness"
            element={<PostsecondaryReadiness />}
          ></Route>
          <Route
            path="/programdevelopment"
            element={<Programdevelopment />}
          ></Route>
          <Route
            path="/purposefulprograms"
            element={<Purposefulprograms />}
          ></Route>
          <Route
            path="/universitycredits"
            element={<UniversityCredits />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
