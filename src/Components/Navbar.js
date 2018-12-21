import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component{


          render(){

            return(

            <div>
                      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                          <div className="container">
                             <Link className="navbar-brand" to="#">Top navbar</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                                 </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About Us</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contuct">Contuct Us</Link>
                                </li>

                                 <li className="nav-item">
                                    <Link className="nav-link" to="/Service">Services</Link>
                                </li>


                                 <li class="nav-item dropdown">
                                         <a class="nav-link dropdown-toggle" to="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cources</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                                          <a class="dropdown-item" to="#">React JS</a>
                                          <a class="dropdown-item" to="#">React Native</a>
                                           <a class="dropdown-item" to="#">PHP Laravel</a>
                                           <a class="dropdown-item" to="#">PHP Codeignitor</a>
                                           <a class="dropdown-item" to="#">Graphics Design</a>
                                           <a class="dropdown-item" to="#">Web Design</a>
                                           <a class="dropdown-item" to="#">Web Development</a>

                                    </div>
                                 </li> 
                                
                            </ul>
                            
                            </div>
                            </div>
                        </nav>
            </div>

            )
          }


} 

export default Navbar;
