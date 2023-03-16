import React, { useState, useEffect } from 'react';
import Header from "./components/Header/index"
import SignIn from "./pages/Signin/index"
import Profile from "./pages/Profile/index"
import Signup from "./pages/Signup/index"
import Home from "./pages/Home/index.js"
import Stores from "./pages/Store/index.js"
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

  useEffect(() => {
    const getUser = async () => {
      try {
        const savedToken = localStorage.getItem("token");
        if(savedToken) {
          const response = await API.isValidToken(savedToken);
          console.log(response);
          if (response.isValid) {
            setToken(savedToken);
            setUsername(response.user.username);
            setIsLoggedIn(true);
            localStorage.setItem("username", response.user.username)
          } else{
            localStorage.removeItem("token")
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

    getUser();

  }, [])

  const logout = () => {
    setToken('');
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("filter")
  }

  return (
    <Router>
      <Preloader load={load} />
      <div className='App'>
        <Header loggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} logout={logout}/>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Gallery */}
          <Route path="/signin" element={<SignIn setToken={setToken} setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setToken={setToken} setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/users/:username" element={<Stores />} />  {/* Storefront View */}
          <Route path="/profile" element={<Profile />} />  {/*  User Profile */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
