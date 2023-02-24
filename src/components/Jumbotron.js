import React from "react";
import { Container} from 'react-bootstrap'
import sand from './Slider/sand-black.jpg'



var Bd = {
    
    backgroundImage: `url(${sand})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: '#efefef',
    height: '400px',
    zIndex:-2,
    
    
}


const Jumbotron = () => {
    return ( 
       
            <div className="p-5 mb-4 " style={Bd}>
                 
                <Container>
                    <div class="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        
                        
                    </div>
                </Container>
            </div>
            

     );
}
 
export default Jumbotron;