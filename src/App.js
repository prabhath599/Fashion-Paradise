
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Registration from "./components/Registration";

 

import React from "react";

import Home from "./components/Home";

import Login from "./components/Login";

 

import Detail from "./components/Detail";

import Cart from  "./components/Cart";
 import Checkout from "./components/Checkout";

 import Update from "./components/Update";
 const App = () => {

   

  return (
    

    <>

    <BrowserRouter>

    <Routes>
    <Route exact path = "/" element={<Login/>}/>
    <Route exact path = "/login" element={<Login/>}/>

    <Route exact path = "/register" element={<Registration/>}/>    

    <Route exact path = "/home" element={<Home/>}/>  
    <Route exact path = "/Order" element={<Checkout/>}/>
    <Route exact path = "/detail/:id" element={<Detail/>}/> 
    <Route exact path = "/cart" element={<Cart/>}/> 
    <Route exact path = "/Update" element={<Update/>}/>

    </Routes>

    </BrowserRouter>

    </>

  )

}

export default App;

