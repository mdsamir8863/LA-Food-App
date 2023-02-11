import React from 'react'
import AboutUs from './Home/Components/AboutUs/AboutUs'
import Header from './Home/Components/Header/Header'
import Manu from './Home/Components/Menu/Manu'
import MenuCard from './Home/Components/MenuCards/MenuCard'
import Navbar from './Home/Components/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <MenuCard/>
      <AboutUs/>
      <Manu/>
    </div>
  )
}

export default App