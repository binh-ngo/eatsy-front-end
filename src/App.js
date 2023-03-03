import React, { useState } from 'react';
import Header from "./components/Header/index"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
      <Header loggedIn = {loggedIn} setLoggedIn={setLoggedIn}/>
  );
}

export default App;
