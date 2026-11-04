
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Register from "./pages/Register";
import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { ShopKartProvider } from "./context/ShopKartContext";




function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  
  return (

    <>
    <ShopKartProvider>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login"  element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
      </ShopKartProvider>

    </>
  );

}

export default App;