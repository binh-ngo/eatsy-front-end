import React, { useState, useEffect } from 'react';
import Header from "./components/Header/index"
import SignIn from "./pages/Signin/index"
import Profile from "./pages/Profile/index"
import Signup from "./pages/Signup/index"
import Home from "./pages/Home/index.js"
import Stores from "./pages/Stores/index.js"
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link, 
  useParams
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from './components/Preloader';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
    <div className='App'>
      <Header loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />}/> {/* Gallery */}
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/users/:username" element={<Stores />}/>  {/* Storefront View */}
        <Route path="/profile/:username" element={<Profile />}/>  {/*  User Profile */}
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
