import React, { useState } from 'react';
import Header from "./components/Header/index"
import SignIn from "./components/Signin/index"
import Profile from "./components/Profile/index"
import Signup from "./components/Signup/index"
import Home from "./components/Home/index.js"
import Stores from "./components/Stores/index"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
    <div className='App'>
      <Header loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />}/> {/* Gallery */}
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/stores" element={<Stores />}/>  {/* Storefront View */}
        <Route path="/profile" element={<Profile />}/>  {/*  User Profile */}
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
