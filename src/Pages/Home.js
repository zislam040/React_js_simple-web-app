import React, { Component } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
class Home extends Component{


    render(){

        return(

            <div>
                  <Navbar/>
                  <div className="container text-justify">
                <h2>Welcome To Our Home Page</h2>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper mattis tellus a luctus. Praesent sed orci justo. In sapien augue, volutpat nec ligula vel, ullamcorper dictum odio. Donec auctor mollis massa, id volutpat odio tempor ac. Integer in ex porta, venenatis quam in, finibus mi. Quisque lobortis suscipit nunc, ac mollis ipsum consectetur ac. Aenean rutrum magna nisi, ut posuere quam imperdiet vitae. Quisque interdum odio justo, at interdum mauris convallis ac. Nam purus est, lacinia sit amet est quis, sodales fermentum nibh. Proin vel consectetur nisi. Nam rutrum maximus lacus, eu pharetra lacus mollis vel. Nunc euismod ultrices felis. Cras sapien mi, ultrices sed nisl id, venenatis hendrerit augue. Fusce efficitur a turpis sit amet maximus. Aliquam fermentum et eros sed imperdiet.

                 </p>
                 </div>
                
                 <Footer/>
            </div>
        )
    }


}

export default Home;