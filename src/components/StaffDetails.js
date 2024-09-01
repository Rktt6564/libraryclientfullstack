// src/components/StaffDetails.js
import React from 'react';
import { Navbar, Nav, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'; // Use useHistory without curly braces

const StaffDetails = () => {
  const history = useHistory(); // Use the useHistory hook

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Staff Details</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>

      {/* Back Button */}
      <div style={{ marginTop: '56px', marginLeft: '20px' }}>
        <Button onClick={() => history.goBack()} variant="outline-primary">
          Back
        </Button>
      </div>

      {/* Staff Details */}
      {/* ... (rest of the component) */}
    </div>
  );
};

export default StaffDetails;
