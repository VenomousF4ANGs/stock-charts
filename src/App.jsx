import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
          <Router>
            <NavBar />
            <Route path = "/" exact><Home/></Route>
            <Route path = "/about" exact><About/></Route>
          </Router>
    </div>
  );
}

export default App;
