import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      {isLoggedIn ? <UserProfile /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
