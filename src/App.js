import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import { Navbar } from './components/navbar';
import {ParticleEffect} from './Particles.js';

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({x: e.clientX, y: e.clientY});
  };

  if (typeof navigator !== 'undefined' && isMobile())
  {
    return null;
  } 
  
  return <div className="cursor"
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`
    }}/>
}

const App = () => {

  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/website-by-sam">
            <Redirect to="/website-by-sam/aboutme" />
          </Route>
          <Route path="/website-by-sam/aboutme">
            <ParticleEffect/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;