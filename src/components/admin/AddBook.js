// AddBook.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import './AddBook.css';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    department: '',
    copiesAvailable: 0,
    bookId: '',
  });

  const [addedBooks, setAddedBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/books');
      setAddedBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []); // Fetch books on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/books', book);
      fetchBooks(); // Fetch updated books after adding a new book
      setBook({
        title: '',
        author: '',
        department: '',
        copiesAvailable: 0,
        bookId: '',
      }); // Reset form fields after adding book
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleUpdateBook = async (id) => {
    try {
      // Logic to update a book based on its ID
      // You need to implement this part based on your backend API and book update functionality
      // Example: await axios.put(`http://localhost:5000/api/auth/books/${id}`, updatedBookData);
      fetchBooks(); // Fetch updated books after updating
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/books/${id}`);
      fetchBooks(); // Fetch updated books after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Add Book</h2>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={book.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={book.author}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={book.department}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCopiesAvailable">
                  <Form.Label>Copies Available</Form.Label>
                  <Form.Control
                    type="number"
                    name="copiesAvailable"
                    placeholder="Copies Available"
                    value={book.copiesAvailable}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Form.Group controlId="formBookId">
                  <Form.Label>Book ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="bookId"
                    placeholder="Book ID"
                    value={book.bookId}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="align-self-end">
                <Button variant="primary" onClick={handleAddBook}>
                  Add Book
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <h3 className="text-center mt-4">Added Books</h3>
<Row className="justify-content-center">
  {addedBooks.map((addedBook, index) => (
    <Col key={index} md={4} className="mb-4">
      <Card>
        <Card.Body>
          <strong>Title:</strong> {addedBook.title}, <strong>Author:</strong> {addedBook.author}, <strong>Department:</strong> {addedBook.department},{' '}
          <strong>Copies Available:</strong> {addedBook.copiesAvailable}, <strong>Book ID:</strong> {addedBook.bookId}
          <div className="mt-2">
            <Button variant="warning" onClick={() => handleUpdateBook(addedBook._id)}>
              Update
            </Button>
            <span>  </span>
            <Button variant="danger" onClick={() => handleDeleteBook(addedBook._id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

    </div>
  );
};

export default AddBook;
