import React from "react";
import NavBar from "./Components/NavBar";
import UserDetails from "./Components/UserDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Routes/home";
import Contacts from "./Components/Routes/contact";
const App = () => {
  return ( 
    <> 
     <NavBar/>

    <Routes>


     <Route path="/project" element={<UserDetails />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contacts/>} />

       
      <Route />
    </Routes>
</>
   );
}
 
export default App;
