import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet/>
    </div>
  );
};

export default App;