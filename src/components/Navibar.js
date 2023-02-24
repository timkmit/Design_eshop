import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        text-decoration: none;
        &:hover {
            color: white
        }
    }
`

const NavigationBar = () => {
    return ( 
        <>
        <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

            
            <Navbar.Brand>БАЗА</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            <Nav className="justify-content-end ">
                    <Button variant="primary" className="me-2">Log In</Button>
                    <Button variant="primary" className="me-2">Log Out</Button>
            </Nav>
            </Container>
        </Navbar>
        </Styles>
    </>
     );
}
 
export default NavigationBar;
