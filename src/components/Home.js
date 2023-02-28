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
        <Container style={{paddingTop: '1rem', paddingBottom: '3rem', justifyContent: "center",}}>
            <Row>
                <Col>
                    <Card style={{width: '24rem', margin: '0.5rem'}}>
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
                    <Card style={{width: '24rem', margin: '0.5rem'}}>
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
                    <Card style={{width: '24rem', margin: '0.5rem'}}>
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

        <Container style={{ paddingBottom: '4rem', overflow:"hidden"}}>
            <Row>
                <Col md={4} style={{position: 'absolute', alignItems: "center"}}>
                    <h2>ГДЕ МЫ НАХОДИМСЯ</h2>
                    <p>сида еще можно текст запилить</p>
                </Col>
                <Col md={7}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae49c464eb5051ab06d7f88915096c31227b6e23d54b3d2720ccf6b1479762352&amp;source=constructor" width="1250" height="400" frameborder="0"></iframe>
                </Col>
                
            </Row>
        </Container>
        </>
     );
}
 
export default Home;