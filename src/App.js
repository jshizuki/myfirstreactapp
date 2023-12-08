// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Button from './first_challenge/Button';
import PersonalPizza from './second_challenge/PersonalPizza';
import EditProfile from './third_challenge/EditProfile';

function App() {
  return (
    <div className="container">
      <Button />
      <PersonalPizza />
      <EditProfile />
    </div>
  );
}

export default App;
