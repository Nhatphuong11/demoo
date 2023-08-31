import './App.css';
import {Routes, Route} from "react-router-dom"
import Dashboard from './compunent/page/Dashboard';
import Product from './compunent/page/Product';
import UserPage from './compunent/page/UserPage';
import NotFound from "./compunent/page/NotFound"
import LayoutSidebar from './compunent/layout/LayoutSidebar';
import AddUser from './compunent/admin/AddUser';
import EditUser from './compunent/admin/EditUser';



function App() {
  return (
    <div>
      <LayoutSidebar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/users' element={<UserPage />}></Route>
        <Route path='/add-user' element={<AddUser />}></Route>
        <Route path='/edit-user/:id' element={<EditUser />}></Route>  
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
