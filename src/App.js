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
import API from "./utils/api"

function App() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [load, updateLoad] = useState(true);

 function getToken() {
    const savedToken = localStorage.getItem("token");
    console.log(savedToken);
    if (savedToken) {
      API.isValidToken(savedToken).then(tokenData => {
        if (tokenData.isValid) {
          console.log("--------")
          console.log(tokenData)
          setToken(savedToken);
          setUsername(tokenData.user.username)
          setIsLoggedIn(true)
        } else {
          localStorage.removeItem("token")
        }
      })
    }
  }

  const logout = () => {
    setToken('');
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("token")
  }

  return (
    <Router>
      <Preloader load={load} />
      <div className='App'>
        <Header loggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Gallery */}
          <Route path="/signin" element={<SignIn setToken={setToken} setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setToken={setToken} setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/users/:username" element={<Stores />} />  {/* Storefront View */}
          <Route path="/profile" element={<Profile username={username} token={token} getToken={getToken} />} />  {/*  User Profile */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
