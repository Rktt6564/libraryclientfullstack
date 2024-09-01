import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import AddBook from './admin/AddBook';
import AdminProfile from './admin/Profiles';
import BookRequests from './admin/BookRequests';
import Bills from './admin/Bills';
import { FaBook, FaUser, FaHistory, FaMoneyBill } from 'react-icons/fa'; // New icon imports

const AdminDashboard = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const handleButtonClick = (component) => {
    setDisplayComponent(component);
  };

  const renderSelectedComponent = () => {
    switch (displayComponent) {
      case 'addBook':
        return <AddBook />;
      case 'profile':
        return <AdminProfile />;
      case 'bookRequests':
        return <BookRequests />;
      case 'bills':
        return <Bills />;
      default:
        return <AdminProfile />;
    }
  };

  return (
    <div style={{ paddingTop: '120px', textAlign: 'center' }}>
      <Navbar />
      <Container fluid className="mt-5">
        <Row>
          <Col md={2}>
            <Card>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>
                    <button className="btn btn-link" onClick={() => handleButtonClick('addBook')}>
                      <FaBook /> Add Book
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-link" onClick={() => handleButtonClick('profile')}>
                      <FaUser /> Profile
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-link" onClick={() => handleButtonClick('bookRequests')}>
                      <FaHistory /> Book History
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-link" onClick={() => handleButtonClick('bills')}>
                      <FaMoneyBill /> Bills
                    </button>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={10}>
            {renderSelectedComponent()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
