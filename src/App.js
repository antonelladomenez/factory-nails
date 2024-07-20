import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre-mi" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
