import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
