// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import MasterPage from './MasterPage';
import PrivateRoute from './PrivateRoute';  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/master"
          element={
            <PrivateRoute>
              <MasterPage />
            </PrivateRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/master" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
