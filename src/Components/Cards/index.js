import React from "react";
import { useState } from "react";
import {CardGroup , Card, Button, Row} from 'react-bootstrap';

const Cards = ({cards}) => {
    return (
        <>
        <CardGroup className="d-flex justify-content-center">
        <Row xs={1} md={3} className="g-4 justify-content-center">
            {cards.map((card)=> (
                <Card style={{ width: '18rem', margin: 10, textAlign:'center',}} className="align-self-center" key={card.id}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                <Card.Title >{card.title}</Card.Title>
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