import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from '../Components/BookDetailsComponent';
import Container from 'react-bootstrap/esm/Container';

function ViewBook() {
  const { id: bookId } = useParams(); 
  const [book, setBook] = useState({
    title: "Loading...",
    author: "Loading...",
    published_year: "Loading...",
    genre: "Loading...",
    description: "Loading...",
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error("Error fetching book data:", error));
  }, [bookId]);

  return (
    <Container className='mt-3'>
      <h1 className='text-center'>Book Details</h1>
      <BookDetails book={book} />
    </Container>
  );
}

export default ViewBook;
