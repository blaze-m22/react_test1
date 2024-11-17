import { useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Carousel from './components/Carousel';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Clients from './pages/Clients';

function App() {

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header toggleSidebar={toggleSidebar} />
        <SideNav isVisible={isVisible} toggleSidebar={toggleSidebar} />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/clients" element={<Clients/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
