// MasterPage.js
import React from 'react';

const MasterPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload();  // reload síðu til að endurhlaða Login state
  };

  return (
    <div>
      <h1>Welcome to the Master Page (Dashboard)</h1>
      <p>You are logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MasterPage;
