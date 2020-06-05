import React from 'react';
import { Card, Col } from "react-bootstrap"
import MyBadge from './MyBadge'

const SingleBook = (props) => {
    return (
        <Col md={2}>
            {console.log(props)}
            <Card>
                <div style={{ width: '100%', height: '350px', overflow: 'hidden' }}>
                    <Card.Img variant="top" src={props.book.img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Text>
                        {props.book.price}€
                        <MyBadge category={props.book.category} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default SingleBook