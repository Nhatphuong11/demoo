
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartForm from './compunent/CartForm';
import CartList from './compunent/CartList';
import Dashboard from './compunent/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/admin/cars" element={<CartList/>}></Route>
        <Route path="/admin/cars/add" element={<CartForm/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
