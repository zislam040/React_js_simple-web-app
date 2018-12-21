import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home  from'./Pages/Home';
import About from './Pages/About';
import Contuct from './Pages/Contuct';
import Service from './Pages/Service';

class App extends Component {
  render() {
    return (

            <Router>
                <div className="App">
                      <Route exact path="/" component ={Home} />
                      <Route exact path="/About" component= {About} />
                      <Route exact path="/Contuct" component={Contuct} />
                      <Route exact path="/Service" component={Service}/>
                         
                </div> 
                   
            </Router>
     

    );
    


  }
}

export default App;







