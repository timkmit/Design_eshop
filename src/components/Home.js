import React from "react";
import Slider from "./Slider/Slider";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import sand from './Slider/sand.jpg'
import galka from './Slider/galka.jpg'
import sheben from './Slider/sheben.jpg'

const Home = () => {
    return ( 
        <>
        <Slider/>
        <Container style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
            <Row>
                <Col>
                    <Card style={{maxWidth: '18rem'}}>
                        <Card.Img variant="top" src={sand} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                text text text text text text text
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{maxWidth: '18rem'}}>
                        <Card.Img variant="top" src={sand} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                text text text text text text text
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{maxWidth: '18rem'}}>
                        <Card.Img variant="top" src={sand} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                text text text text text text text
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
        </>
     );
}
 
export default Home;