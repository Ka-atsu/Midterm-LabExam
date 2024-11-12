import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

function BookForm({ book, onSubmit }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation for Title
        if (!title.trim()) {
            alert("Title is required.");
            return;
        }

        // Validation for Author
        if (!author.trim()) {
            alert("Author is required.");
            return;
        } 

        // Validation for Published Year
        if (!publishedYear.trim()){
            alert("Published year is required.");
            return;
        } else if (!/^\d{4}$/.test(publishedYear)) {
            alert("Published year must be a 4-digit number.");
            return;
        }

        // Validation for Genre
        if (!genre.trim()) {
            alert("Genre is required.");
            return;
        }

        // Validation for Description
        if (!description.trim()) {
            alert("Description is required.");
            return;
        } 
        
        onSubmit({
            title,
            author,
            published_year: publishedYear,
            genre,
            description,
        });
    };

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
        <Form.Group >
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control type='text' placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Published Year</Form.Label>
            <Form.Control type='text' placeholder="Enter Published Year" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control type='text' placeholder="Enter Genre" value={genre} onChange={(e) => setGenre(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-3'>
                Save Book
        </Button>
        <Button variant="secondary" className="ms-1 mt-3" onClick={() => navigate(`/`)}>
                Back
        </Button>
    </Form>
    </Container>
  );
}

export default BookForm;
