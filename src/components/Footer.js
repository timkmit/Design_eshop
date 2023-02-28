import React from "react";
import { Container } from "react-bootstrap";


const Footer = () => {
    return ( 
        <Container fluid style={{backgroundColor: '#212529', color: '#fff' }}>
            <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                <div style={{textAlign: 'center'}}>
                <p>timengalytchev@mail.ru</p>
                <p>С каждым днем все лучше</p>
                </div>
                
            </Container>
        </Container>
     );
}
 
export default Footer;