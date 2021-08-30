import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Request from './page/Request';
import Admin from './page/Admin';

function App() {
  return (
    <div className="App">
    
    <> 
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/request' component={Request} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </Router>
    </>
    </div>
    
  );
}

export default App; 
