
import './App.css';
import {  NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './Compunent/HomePage';
import AboutPage from './Compunent/AboutPage';
import AboutProduct from './Compunent/AboutProduct';
import ConTactPage from './Compunent/ConTactPage';
import AboutIndex from './Compunent/AboutIndex';
import NotFound from './Compunent/NotFound';
import AboutUser from './Compunent/AboutUser';
import DemoNavigate from './Compunent/DemoNavigate';
import Course from './Compunent/DymamicRouter/Course';
import CourseDetail from './Compunent/DymamicRouter/CourseDetail';
import CourseDetailType from './Compunent/DymamicRouter/CourseDetail';
import Accout from './Compunent/ProtextedRouter/Accout';
import Login from './Compunent/ProtextedRouter/Login';
import Person from './Compunent/ProtextedRouter/Person';
import Privaterouter from './Compunent/ProtextedRouter/Privaterouter';

function App() {

  const isActiveStyet = ({ isActive }) =>({
    color: isActive ? "red" : "red",
    backgroundColor: isActive ? "pink" : "pink"
  });


  return (
    <div>
      {/* <ul>
        <li>
          <Link to='/'>HomePage</Link>
        </li>
        <li>
          <Link to='/about'>Aboutpage</Link>
          <ul>
            <li>
              <Link to='/about/about-Product'>about-Product</Link>
            </li>
            <li>
              <Link to='/about/about-User'>about-User</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/contact'>ConTactPage</Link>
        </li>
      </ul> */}

     <ul>
        <li>
          <NavLink to='/' style={isActiveStyet}>HomePage</NavLink>
        </li>
        <li>
          <NavLink to='/about' style={isActiveStyet}>Aboutpage</NavLink>
          <ul>
            <li>
              <NavLink to='/about/about-Product' style={isActiveStyet}>about-Product</NavLink>
            </li>
            <li>
              <NavLink to='/about/about-User' style={isActiveStyet}>about-User</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to='/contact' style={isActiveStyet}>ConTactPage</NavLink>
        </li>
      </ul>


      <DemoNavigate/>


      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}>
          <Route index element={<AboutIndex/>}></Route>
          <Route path='about-Product' element={<AboutProduct/>}></Route>
          <Route path='about-User' element={<AboutUser/>}></Route>
        </Route>
        <Route path='/contact' element={<ConTactPage/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/course/:id' element={<CourseDetail/>}></Route>
        <Route path='/course/:type/:id' element={<CourseDetailType/>}></Route>
        <Route element={<Privaterouter/>}>
          <Route path='/person' element={<Person/>}></Route>
          <Route path='/accout' element={<Accout/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route> 

        
      </Routes>
    </div>
  );
}

export default App;
