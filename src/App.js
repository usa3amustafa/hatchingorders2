import { BrowserRouter } from 'react-router-dom'

import Nav from './components/Nav/'

import { AppProvider } from './context/AppContext'
import { getApp } from './utils/helper'

function App() {
  const AppRendered = getApp()

  return (
    <AppProvider>
      <BrowserRouter>
        <Nav />
        <AppRendered />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
