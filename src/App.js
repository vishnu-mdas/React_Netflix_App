import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import {action,originals,comedy, romance } from './urls'
import './App.css'
import Banner from './Components/NavBar/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

 function App() {
  return (
  <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals' />
     <RowPost url={action}  title='Action Movies' isSmall />
     <RowPost url={romance}  title='Romance Movies' isSmall />
  </div>

  );
}

export default App;
