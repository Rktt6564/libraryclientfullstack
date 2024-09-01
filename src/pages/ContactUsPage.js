// src/pages/ContactUsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonsRow from '../components/ButtonsRow';

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <ButtonsRow />
      <Container
        className="mt-0"
        style={{
          marginTop: '20px',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          className="card p-4 rounded"
          style={{
            background: '#ffffff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e2e6ea';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Row className="justify-content-center">
            <Col md={6} className="mt-4">
              <h2 style={{color:'#991E20'}}><strong>Dr. C. Srikanth Reddy</strong></h2>
              <p>Librarian & Head</p>
              <p>Library & Information Centre</p>
              <p>CBIT, Gandipet, Hyderabad - 500 075</p>
              <p>Telangana, India.</p>
              <p>Mobile: 084669 97215</p>
              <p>Email: cbitlic@gmail.com / librarian@cbit.ac.in</p>
            </Col>
            <Col md={6} className="mt-4">
              <h2 style={{color:'#991E20'}}><strong>Important Contacts</strong></h2>
              <p>AEC Incharge: 084669 97216</p>
              <p>Admin Office: 084669 97217</p>
              <p>Principal Office: 084669 97201</p>
              <p>President / Chairman - Office: 040 - 2419 3276</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={12} className="mt-4">
              <h2 style={{color:'#991E20'}}><strong>Other Important Contacts</strong></h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Telephone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add more rows as needed */}
                  <tr>
                    <td>Principal</td>
                    <td>84669 97201</td>
                  </tr>
                  <tr>
                    <td>HOD - Civil Engineering</td>
                    <td>84669 97202</td>
                  </tr>
                  {/* ... */}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={12} className="mt-4">
              <img
                src="https://www.library.cbit.ac.in/images/Librarian%20Contact%20QR.png"
                alt="QR Code"
                height={140}
                width={140}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
