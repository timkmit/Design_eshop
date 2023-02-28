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
                    <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Каталог</Link></Nav.Link>
                    <Nav.Link><Link to="/about">О нас</Link></Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            <Nav className="justify-content-end ">
                    <Button variant="primary" className="me-2" onClick={handleShow}>Заказать звонок</Button>
                    
            </Nav>
            </Container>
        </Navbar>
        </Styles>
        <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Мы свяжемся с Вами!</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>

                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Введите Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">Мы не будем присылать рекламу на Вашу почту</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="tel" placeholder="+7-900-000-00-00" />
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" className="me-2" onClick={handleClose}>Отправить</Button>
                </Form>
            </Modal.Body>
        </Modal>
    </>
     );
}
 
export default NavigationBar;
