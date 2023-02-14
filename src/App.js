import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Home/Components/AboutUs/AboutUs";
import BookTable from "./Home/Components/BookYourTable/BookTable";
import ClientSays from "./Home/Components/ClientSays/ClientSays";
import Follow from "./Home/Components/FollowUs/Follow";
import Footer from "./Home/Components/Footer/Footer";
import Header from "./Home/Components/Header/Header";
import Manu from "./Home/Components/Menu/Manu";
import MenuCard from "./Home/Components/MenuCards/MenuCard";
import Navbar from "./Home/Components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route exact path="/" element={<App />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/menu" element={<Manu />} />
          <Route exact path="/BookYourTable" element={<BookTable />} />
        </Routes>
        {/* <Navbar /> */}
        <Header />
        <MenuCard />
        <AboutUs />
        <Manu />
        <ClientSays />
        <BookTable />
        <Follow />
        <Footer />
      </Router>
    </>
  );
};

export default App;
