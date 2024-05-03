import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importez BrowserRouter depuis react-router-dom
import SignupForm from './components/SignUpForm'; // Utilisez SignupForm plutôt que SignUpForm
import './App.css';

function App() {
  return (
    <Router>
        <SignupForm />
        </Router>
  );
}

export default App;
