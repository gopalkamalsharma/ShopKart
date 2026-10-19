
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return(
  
  <Routes>
    <Route path="/" element={<Home Student FullName="Gopal" Age={30}/>}/>
    <Route path="/product" element ={<Product />}/>
    <Route path="/cart" element ={<Cart />} />
    <Route path="/login" element ={<Login />} />
  </Routes>  
  );
  
}

export default App;