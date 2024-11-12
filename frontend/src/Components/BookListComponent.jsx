import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function BookListComponent({ books, onDelete }) {
    const navigate = useNavigate();

    return (
        <Container className="my-4">
            <Row className="g-4">
                {books.map(book => (
                    <Col key={book.id} xs={12} sm={6} md={4}>
                        <Card className="book-item h-100">
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="book-title">{book.title}</Card.Title>
                                    <Card.Text className="book-author">by {book.author}</Card.Text>
                                </div>
                                <div className="d-flex mt-3">
                                    <Button onClick={() => navigate(`/viewBook/${book.id}`)}>View</Button>
                                    <Button variant="secondary" onClick={() => navigate(`/editBook/${book.id}`)} className="ms-1">Edit</Button>
                                    <Button variant="danger" onClick={() => onDelete(book.id)} className="ms-1">Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BookListComponent;
