import Box from '@mui/material/Box';
import './style.css'
import {Card, Button} from "react-bootstrap";

function BasicExampleCategory(props) {

    const {title, description, img, price} = props;

    

    return (

        



        <Box className="cardBox">


            <Card style={{maxWidth: '20rem', margin: '0.5rem'}}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {description}
                            </Card.Text>
                            <a style={{display: "flex"}}><Card.Text>
                            {price}
                            </Card.Text>руб.</a>
                            <p></p>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>

            
        </Box>

    );
}

export default BasicExampleCategory;