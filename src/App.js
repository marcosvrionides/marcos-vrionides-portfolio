import './App.css';
import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile';
import Introduction from './Introduction/Introduction';
import Links from './Links/Links';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Navigator from './Navigator/Navigator';

function App() {
  useEffect(() => {
    document.title = 'Marcos'
  }, [])

  return (
    <div className='body'>
      <Navigator />
      <Profile />
      <Introduction />
      <Links />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
