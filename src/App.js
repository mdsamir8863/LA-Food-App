import React from 'react'
import AboutUs from './Home/Components/AboutUs/AboutUs'
import BookTable from './Home/Components/BookYourTable/BookTable'
import ClientSays from './Home/Components/ClientSays/ClientSays'
import Footer from './Home/Components/Footer/Footer'
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
      <ClientSays/>
      <BookTable/>
      <Footer/>
    </div>
  )
}

export default App