import React, {Component} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class About extends Component{

        render(){

            return(

            <div>
                <Navbar/>
                <div className="container text-justify">
                    <h2>Welcome To Our About Page</h2>
                        <p>
                            Integer rutrum arcu accumsan diam venenatis molestie. Cras ante mi, lobortis sed lacus nec, pellentesque egestas ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam faucibus diam id posuere facilisis. Fusce maximus elit sit amet mauris sagittis, nec ultricies turpis tristique. Pellentesque id lobortis leo. Integer urna sem, dapibus at leo vel, aliquam ultrices felis. Morbi hendrerit varius lobortis. Donec placerat mollis velit eget dignissim. Cras lobortis, lorem porttitor fermentum venenatis, eros sapien mattis erat, vel dictum leo risus non nulla. Proin gravida in ipsum a suscipit.
                        </p> 
                    </div>
             <Footer/>

            </div>
            )
        }

}

export default About