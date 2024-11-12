import React, { useState, useEffect } from 'react';
import BookListComponent from '../Components/BookListComponent';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = () => {
            fetch('http://127.0.0.1:8000/api/books')
                .then(res => res.json())
                .then(data => setBooks(data))
                .catch(error => console.error("Error fetching books:", error));
        };

        // Fetch data immediately, then set up interval
        fetchBooks();
        const intervalId = setInterval(fetchBooks, 5000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleDelete = (bookId) => {
        fetch(`http://127.0.0.1:8000/api/books/${bookId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
                alert("Book deleted successfully!");
            } else {
                throw new Error("Failed to delete the book");
            }
        })
        .catch(error => console.error("Error deleting book:", error));
    };

    return (
        <Container className="mt-4">
            <Row className="align-items-center mb-3">
                <Col className="text-center">
                    <h1>Home</h1>
                </Col>
                <Col className="text-center">
                    <Button variant="primary" onClick={() => navigate(`/addBook`)}>
                        Add Book
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BookListComponent books={books} onDelete={handleDelete} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
