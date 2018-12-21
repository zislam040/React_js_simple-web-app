import React,{Component} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class Contuct extends Component{

    render(){

         return(

            <div>
                <Navbar/>
                <div className="container text-justify">
                    <h2>Welcome To Our Contuct Page</h2>
                        <p>
                        Morbi sem nulla, cursus eget urna ut, venenatis consectetur metus. Ut leo mauris, vulputate vitae lorem vel, convallis gravida risus. Nam accumsan ex sem, a vehicula lacus pulvinar sed. Praesent porta ante ac nibh ultrices vehicula. Sed pretium, risus nec aliquam sollicitudin, sapien dolor accumsan purus, ut semper eros nibh a ipsum. Aliquam erat volutpat. Mauris sit amet augue arcu. Duis tempor, augue a finibus sagittis, sapien ipsum lobortis est, vel ullamcorper felis leo vitae quam.
                        </p> 
                    </div>
                <Footer/>

            </div>
         )
    }
}

export default Contuct