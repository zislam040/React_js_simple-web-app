import React, {Component} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
class Service extends Component{

    render(){

        return(
   
            <div>
                <Navbar/>
                    <div className="container text-justify">
                    <h2>Welcome To Our Sevices Page</h2>
                        <p>
                        Aliquam eu mollis leo, ac lobortis lacus. Donec tortor quam, convallis in vulputate at, imperdiet ac nisi. Suspendisse rutrum dapibus est, hendrerit tempor tellus tempus et. Donec eget urna at mi rutrum accumsan. Cras maximus lectus eu felis consequat, tincidunt lacinia nisi gravida. Phasellus eu urna viverra, sodales risus id, congue massa. Integer pellentesque massa risus, non tristique tellus placerat vulputate. Nullam ac egestas ligula, in lacinia felis. Proin placerat pharetra ligula. Sed euismod id lectus eu egestas. Aenean eu ligula ultrices, posuere nisi ac, consectetur lectus. Nam ac placerat nisl, a consequat magna.
                        </p> 
                    </div>
                <Footer/>
           </div>
        )
    }
}

export default Service