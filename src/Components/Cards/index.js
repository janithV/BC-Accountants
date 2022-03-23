import React from "react";
import {CardGroup , Card, Button, Row} from 'react-bootstrap';
import styles from "./styles";

const Cards = ({cards, color}) => {

    const headerText = {
        margin: '-13px -24px 16px',
        padding: 24,
        borderRadius: 4,
        backgroundColor: color
    }

    return (
        <>
        <CardGroup className="d-flex justify-content-center">
        <Row xs={1} md={3} className="justify-content-center">
            {cards.map((card)=> (
                <Card style={{ width: '18rem', margin: 10, textAlign:'center',}} className="align-self-center" key={card.id}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                <Card.Title style={headerText}>{card.title}</Card.Title>
                <Card.Text>{card.description1}</Card.Text>
                <Card.Text>{card.description2}</Card.Text>
                <Card.Text>{card.description3}</Card.Text>
                <h2>{card.price}</h2>
                <Button variant="primary">{card.button}</Button>
                </Card.Body>
                </Card>
            ))}
            </Row>
            </CardGroup>
            
        </>
    );
}

export default Cards;