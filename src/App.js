import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Register } from './Register';
import { Login } from './Login';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (

    <div className="App">
      {
        currentForm === "login" ? <Login /> : <Register />
      }
    </div>
  );
}

export default App;
