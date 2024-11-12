import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import { useNavigate } from 'react-router-dom';

function BookDetails({ book }) {
  const navigate = useNavigate();
  return (
    <Container className="d-flex justify-content-center mt-5">
            <Card style={{ width: '100%', maxWidth: '600px' }} className="shadow-sm">
                <Card.Body>
                    <Card.Title as="h2" className="text-center mb-4">
                        {book.title}
                    </Card.Title>
                    <Card.Text><strong>Year Published:</strong> {book.published_year}</Card.Text>
                    <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
                    <Card.Text><strong>Genre:</strong> {book.genre}</Card.Text>
                    <Card.Text><strong>Description:</strong> {book.description}</Card.Text>
                    <div className="d-flex justify-content-center mt-4">
                        <Button variant="secondary" onClick={() => navigate(`/`)}>
                            Back
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
  );
}

export default BookDetails;
