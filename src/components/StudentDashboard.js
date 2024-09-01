import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaUser, FaBook, FaHistory, FaClipboardList } from 'react-icons/fa';
import MyProfile from './Student/MyProfile';
import MyBook from './Student/MyBook';
import Transaction from './Student/Transaction';
import BookHistory from './Student/BookHistory';

const StudentDashboard = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const handleButtonClick = (component) => {
    setDisplayComponent(component);
  };

  const renderSelectedComponent = () => {
    switch (displayComponent) {
      case 'profile':
        return <MyProfile />;
      case 'myBook':
        return <MyBook />;
      case 'bookHistory':
        return <BookHistory />;
      case 'transaction':
        return <Transaction />;
      default:
        return <MyProfile/>
    }
  };

  return (
    <div style={{ paddingTop: '120px', textAlign: 'center' }}>
      <Navbar />
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Col md={2}>
            <Card>
              <Card.Body>
                <ul className="list-unstyled">
                  <li>
                    <Button variant="link" onClick={() => handleButtonClick('profile')}>
                      <FaUser size={20} style={{ marginRight: '5px' }} /> My Profile
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" onClick={() => handleButtonClick('myBook')}>
                      <FaBook size={20} style={{ marginRight: '5px' }} /> My Book
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" onClick={() => handleButtonClick('bookHistory')}>
                      <FaHistory size={20} style={{ marginRight: '5px' }} /> Book History
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" onClick={() => handleButtonClick('transaction')}>
                      <FaClipboardList size={20} style={{ marginRight: '5px' }} /> Transaction
                    </Button>
                  </li>
                  {/* You can add more buttons/icons for other sections */}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8} className="d-flex justify-content-center align-items-start">
            {renderSelectedComponent()}
          </Col>
          <Col md={2}>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
              <Link to="/student/MyProfile">
                <FaUser size={30} style={{ color: 'white' }} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentDashboard;
