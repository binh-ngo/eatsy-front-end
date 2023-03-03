import React, { useState } from 'react';
// import Header from "./components/Header/index"
import Profile from "./components/Profile/index"

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className='App'>
      {/* <Header loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/> */}
      <Profile />
    </div>
  );
}

export default App;
