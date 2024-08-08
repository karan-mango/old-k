import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './styles/universal.css';
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function App() {
  return (
    <>


<Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product" element={<UpdateProduct />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
