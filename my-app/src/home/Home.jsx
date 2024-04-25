import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowcase from './CategoryShowcase'
import Register from './Register'
import Location from './Location'
import About from './About'
import Appsection from './Appsection'
import Sponser from './Sponser'


const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowcase/>
      <Register/>
      <Location/>
     <About/>
     <Appsection/>
     <Sponser/>
    </div>
  )
}

export default Home