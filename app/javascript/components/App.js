import './App.css';
import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Greeting from './greetings';

const App = () => {
  return (
    <div className="App">
     <header className="header">
          <h1 className="main-heading">Greetings Generator</h1>
          <nav className="navbar">
            <Link to="/">Greetings</Link>
           </nav>
      </header>
      <Routes>
        <Route index element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default App;
