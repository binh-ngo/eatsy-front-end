import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import eatsyLogo from "./assets/eatsyimage.png"

function Header({ loggedIn, setLoggedIn, logout}) {
  function rawr() {
    document.querySelector("#Shake").setAttribute("class", "rawr")
  }
  return (
    <div className="header">
      {/* If user is logged in, generate this html for the header
          still have to double check the styling for logged in,  */}
      {loggedIn ? (
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href='/' className="navbar-brand brand col-sm-5">
            EATSY <img src={eatsyLogo}alt="eatsy-logo" width="80"height="80" id="Shake"/>
          </a>
          <button
            className="navbar-toggler col-sm-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto list-inline headerTags col-sm-2">
              <li className= "nav-item active list-inline-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
              <li className= "nav-item active list-inline-item">
                <a className="nav-link" onClick={logout} href="/">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        // If we are logged out, render this:
        <nav className="navbar navbar-expand-lg navbar-light row">
          <a href='/' className="navbar-brand col-sm-5">
            EATSY  <img src={eatsyLogo}alt="eatsy-logo" width="80" height="80" id="Shake"/>
          </a>
          <button
            className="navbar-toggler col-sm-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto list-inline col-sm-5">
              <li className= "nav-item active list-inline-item">
                <a className="nav-link" href="/signin">
                  Sign In 
                </a>
              </li>
              <li className= "nav-item active list-inline-item">
                <a className="nav-link" href="/signup">
                  Sign Up 
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
