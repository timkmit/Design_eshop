import React from "react";
import Slider from "./Slider/Slider";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import sand from './Slider/sand.jpg'
import galka from './Slider/galka.jpg'
import sheben from './Slider/sheben.jpg'
import Jumbotron from "./Jumbotron";

const Home = () => {
    return ( 
        <>
        <Slider/>
        <Container style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem', margin: '0.5rem'}}>
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
                    <Card style={{width: '18rem', margin: '0.5rem'}}>
                        <Card.Img variant="top" src={galka} />
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
                    <Card style={{width: '18rem', margin: '0.5rem'}}>
                        <Card.Img variant="top" src={sheben} />
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

        <Jumbotron/>

        <Container style={{ paddingBottom: '4rem'}}>
            <Row>
                <Col md={7}>
                    <img src={sand} height={400}/>
                </Col>
                <Col md={5}>
                    <h2>MAP MAP</h2>
                    <p>dshfkjsdahlfkjsahfkjhaskjfhaskjfhaskdjfhksadj</p>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Home;