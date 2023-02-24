import React, {useState} from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Button variant="primary" className="me-2" onClick={handleShow}>Log In</Button>
                    <Button variant="primary" className="me-2" onClick={handleShow}>Log Out</Button>
            </Nav>
            </Container>
        </Navbar>
        </Styles>
        <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>

                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                </Form>
            </Modal.Body>
        </Modal>
    </>
     );
}
 
export default NavigationBar;
