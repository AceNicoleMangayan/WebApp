import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Registration from './Registration';

function App() {
  const [currentForm, setCurrentForm] = useState('log-in');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      {
        currentForm === "log-in" ? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
