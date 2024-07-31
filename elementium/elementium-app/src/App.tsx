import React from 'react';
import logo from './assets/logo-notext.svg';
import logoText from './assets/logo-textonly.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoText} className="App-name" alt="ELEMENTUIM" />
      </header>
    </div>
  );
}

export default App;
