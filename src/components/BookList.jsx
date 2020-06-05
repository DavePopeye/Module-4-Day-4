import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

const BookList = (props) => {
    return (
        <Container fluid>
            <Row>
                {props.books && props.books.map(book =>
                    <SingleBook book={book} />
                )}
            </Row>
        </Container>
    )
}

export default BookList
