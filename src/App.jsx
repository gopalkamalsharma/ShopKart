
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Register from "./pages/Register";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  return(
  
  <>
  <Navbar userName={userName} />
  <Routes>
    <Route path="/" element={<Home Student FullName="Gopal" Age={30}/>}/>
    <Route path="/product" element ={<Product />}/>
    <Route path="/cart" element ={<Cart />} />
    <Route path="/login" element ={<Login setUserName={setUserName} />} />
    <Route path="/register" element ={<Register setUserName={setUserName} />} />
    <Route path="/practice" element ={<Practice />} />

  </Routes> 
  </> 
  );
  
}

export default App;