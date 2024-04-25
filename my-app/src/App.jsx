import React from 'react'
import { Outlet } from 'react-router-dom'
import Navitems from './componets/Navitems'
import Footer from './componets/Footer'

function App() {
  return (
    <div>
      <Navitems/>
      <div className='min-vh-100'>

      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App