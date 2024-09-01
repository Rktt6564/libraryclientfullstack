import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Form, Button, Table } from 'react-bootstrap';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    bookName: '',
    mobileNo: '',
    transactionId: '',
    fine: '',
    date: '',
  });

  useEffect(() => {
    fetchStudentTransactions();
  }, []);

  const fetchStudentTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const user = JSON.parse(atob(token.split('.')[1]));
        const response = await axios.get(`http://localhost:5000/api/auth/transactions/${user.roll}`);
        setTransactions(response.data);
      }
    } catch (error) {
      console.error('Error fetching student transactions:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(atob(token.split('.')[1])); // Retrieve user data

      if (token && user) {
        const response = await axios.post(`http://localhost:5000/api/auth/transaction/${user.roll}`, {
          ...formData,
          userId: user.id, // Include userId in the request body
          name: user.name,
          roll: user.roll,
        });

        console.log('Transaction saved:', response.data);
        setFormData({
          bookName: '',
          mobileNo: '',
          transactionId: '',
          fine: '',
          date: '',
        });
        fetchStudentTransactions();
      }
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <strong><Card.Title className="text-center mb-4">Transaction Details</Card.Title></strong>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBookName">
              <Form.Label className="text-start">Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book name"
                name="bookName"
                value={formData.bookName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMobileNo">
              <Form.Label className="text-start">Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTransactionId">
              <Form.Label className="text-start">Transaction ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter transaction ID"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formFine">
              <Form.Label className="text-start">Fine</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fine"
                name="fine"
                value={formData.fine}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label className="text-start">Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Table className="mt-4">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Mobile Number</th>
            <th>Transaction ID</th>
            <th>Fine</th>
            <th>Date</th>
            <th>Name</th>
            <th>Roll</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              {/* Display transaction details */}
              <td>{transaction.bookName}</td>
              <td>{transaction.mobileNo}</td>
              <td>{transaction.transactionId}</td>
              <td>{transaction.fine}</td>
              <td>{transaction.date}</td>
              {/* Display user's name and roll */}
              <td>{transaction.name}</td>
              <td>{transaction.roll}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Transaction;
