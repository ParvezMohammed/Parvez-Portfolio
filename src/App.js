import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import History from './History/History';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<About/>}/>  
          <Route path='/History' element={<History/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
