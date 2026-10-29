
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Register from "./pages/Register";
import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id ? {
            ...item,
            quantity: item.quantity + 1
          }
            : item
        );
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ];
    }
    case "INCREASE_QUANTITY": {
      return state.map((item) =>
        item.id === action.payload
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      );
    }
    case "DECREASE_QUANTITY": {
      return state
        .map((item) =>
          item.id === action.payload
            ? {
              ...item, quantity: item.quantity - 1
            }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        );
    }
    case "REMOVE_ITEM": {

      return state.filter(
        (item) => item.id !== action.payload
      );
    }
    case "CLEAR_CART":

      return [];

    case "LOAD_CART":
      return action.payload;
    default:
      return state;
  }
}


function App() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const [cart, dispatch] = useReducer(cartReducer, []);
  return (

    <>
      <Navbar userName={userName} cart={cart} />
      <Routes>
        <Route path="/" element={<Home Student FullName="Gopal" Age={30} />} />
        <Route path="/product" element={<Product dispatch={dispatch}/>} />
        <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch}/>} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/register" element={<Register setUserName={setUserName} />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );

}

export default App;