import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SignUpForm />
      </div>
    </Router>
  );
}

export default App;
