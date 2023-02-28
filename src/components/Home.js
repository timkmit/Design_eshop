import React from "react";
import Slider from "./Slider/Slider";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import sand from './Slider/sand.jpg'
import galka from './Slider/galka.jpg'
import sheben from './Slider/sheben.jpg'
import Jumbotron from "./Jumbotron";
import {useState, useEffect} from 'react'
import axios, {spread} from 'axios';
import Grid from '@mui/material/Grid';
import BasicExampleCategory from "./basic/BasicExample";


const Home = () => {

    const [category, setCategory] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/`)
            .then(response => {
                response
                    .data
                    .forEach(element => {
                        if (element.id) {
                            setCategory(category => [
                                ...category,
                                element
                            ]);
                        }
                        if (!element.id) {
                            setCards(cards => [
                                ...cards,
                                element
                            ]);
                        }
                    });
            });

    }, []);

    return ( 
        <>
        <Slider/>
        <Container style={{paddingTop: '1rem', paddingBottom: '3rem', justifyContent: "center",}}>
            <Grid container="container" spacing={2}>
                <Grid container="container" justifyContent="center">

                    {
                        cards.map((cards, value) => (
                                <BasicExampleCategory
                                    title={cards.title}
                                    img={cards.photo}
                                    descriptoin={cards.descriptions}
                                    key={value}
                                    price={cards.price}/>
                        ))
                    }

                </Grid>
                </Grid>
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