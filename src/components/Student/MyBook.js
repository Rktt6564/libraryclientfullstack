import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBook } from 'react-icons/fa';
import { Container, Row, Col, Card, Form, Table, Button } from 'react-bootstrap';
import './MyBook.css';

function MyBook() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [studentInfo, setStudentInfo] = useState(null);

  // ... (rest of the code remains the same)
  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('http://localhost:5000/api/auth/all-books', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(response.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();

    const storedStudent = JSON.parse(localStorage.getItem('Student'));
    if (storedStudent) {
      setStudentInfo(storedStudent);
    }
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (bookId) => {
    const selectedIndex = selectedBooks.indexOf(bookId);
    if (selectedIndex === -1) {
      setSelectedBooks([...selectedBooks, bookId]);
    } else {
      const updatedSelected = [...selectedBooks];
      updatedSelected.splice(selectedIndex, 1);
      setSelectedBooks(updatedSelected);
    }
  };

  const handleRequestBooks = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const storedStudent = JSON.parse(localStorage.getItem('Student'));
        if (storedStudent) {
          const { roll, name } = storedStudent;

          const selectedBooksData = books.filter((book) =>
            selectedBooks.includes(book._id)
          );

          await axios.post(
            'http://localhost:5000/api/auth/request_books',
            {
              selectedBooks: selectedBooksData.map(book => book._id), // Adjust based on your API structure
              studentRoll: roll,
              studentName: name,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log('Books requested successfully!');
          setSelectedBooks([]);
          fetchBooks();
        }
      }
    } catch (error) {
      console.error('Error requesting books:', error);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.department.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    // <Container className="book-container">
      <Card className="book-card">
        <Card.Header as="h2" className="d-flex justify-content-center">
          <FaBook /> All Books
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search by title or department"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleRequestBooks}
            disabled={selectedBooks.length === 0}
          >
            Request Selected Books
          </Button>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Department</th>
                <th>Copies Available</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td>{book.bookId}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.department}</td>
                  <td>{book.copiesAvailable}</td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      onChange={() => handleCheckboxChange(book._id)}
                      checked={selectedBooks.includes(book._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    // </Container>
  );
}

export default MyBook;
