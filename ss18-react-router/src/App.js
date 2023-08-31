
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './compunents/layout/NavBar';
import HomePage from './compunents/page/HomePage';
import AboutPage from './compunents/page/AboutPage';
import ContactPage from './compunents/page/ContactPage';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
