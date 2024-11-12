import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../Components/BookFormComponent';
import Container from 'react-bootstrap/esm/Container';

function EditBook() {
  const { id: bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "Loading...",
    author: "Loading...",
    published_year: "Loading...",
    genre: "Loading...",
    description: "Loading...",
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${bookId}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(error => console.error("Error fetching book data:", error));
  }, [bookId]);

  const onEdit = (updatedBook) => {
    fetch(`http://127.0.0.1:8000/api/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    })
      .then(response => {
        if (response.ok) {
          alert("Book updated successfully!");
          navigate(`/`); 
        } else {
          throw new Error("Failed to update book");
        }
      })
      .catch(error => console.error("Error updating book:", error));
  };

  return (
    <Container className='mt-3'>
      <h1>Edit Book</h1>
      <BookForm book={book} onSubmit={onEdit} />
    </Container>
  );
}

export default EditBook;
