import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../Components/BookFormComponent';
import Container from 'react-bootstrap/esm/Container';

function AddBook() {
    const navigate = useNavigate();

    const handleAddBook = async (bookData) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookData),
            });

            if (response.ok) {
                console.log('Book added successfully!');
                navigate('/'); 
            } else {
                console.error('Failed to add book');
            }
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <Container className="add-book-container mt-3">
            <h2>Add New Book</h2>
            <BookForm onSubmit={handleAddBook} />
        </Container>
    );
}

export default AddBook;
