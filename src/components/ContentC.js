import React, { useState } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContentC = () => {
  const tableDarkColor = "#a71a1b";
  const tableLightColor = "#a16b15";
  const headingColor = "#991E20";
  const thColor = "#385728";
  const tdTextColor = "#FFFFFF"; // black color
  const tdBackgroundColor = "#000000"; // white color

  const [showModal, setShowModal] = useState(false);

  const handleRowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h3 style={{ color: headingColor }}>Teaching - Professional - Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor, cursor: 'pointer' }} onClick={handleRowClick}>
            <td>01</td>
            <td>Dr. Srikanth Reddy, C</td>
            <td>Librarian & Head</td>
            <td>B.Sc., M.A., M.L.I.Sc., PGD-LAN, Ph.D</td>
          </tr>
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{color:''}}><strong>Librarian Information</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'justify' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{color:'#385728'}}><strong>Dr. SRIKANTH REDDY, CHINTHAPALLY</strong></h2>
          <img
            src="https://www.library.cbit.ac.in/images/2019.Lib.Staff/0.Srikanth.jpg"
            alt="Librarian Image"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>
        <Table striped bordered hover responsive>
          <tbody>
            <tr>
              <td>
                <b>Name:</b>
              </td>
              <td colSpan="3">Dr. SRIKANTH REDDY, CHINTHAPALLY</td>
            </tr>
            <tr>
              <td>
                <b>Designation:</b>
              </td>
              <td colSpan="3">Librarian & Head</td>
            </tr>
            <tr>
              <td>
                <b>Department:</b>
              </td>
              <td colSpan="3">Library & Information Centre</td>
            </tr>
            <tr>
              <td>
                <b>Date of Joining the Institution:</b>
              </td>
              <td colSpan="3">24 - August - 1994</td>
            </tr>
            <tr>
              <td>
                <b>Address:</b>
              </td>
              <td colSpan="3">
                Librarian & Head, Library & Inf. Centre, CBIT, Gandipet, Hyderabad - 500 075; TELANGANA State
              </td>
            </tr>
            <tr>
              <td>
                <b>Email:</b>
              </td>
              <td colSpan="2">librarian@cbit.ac.in / cbitlic@gmail.com</td>
              <td>
                <b>Telephone:</b> 08466997215 (Office) & 98481-68223 (Mobile)
              </td>
            </tr>
            <tr>
              <td>
                <b>Qualifications with Class/Grade:</b>
              </td>
              <td colSpan="3">
                <Table>
                  <tbody>
                    <tr>
                      <td><strong>Name of the Degree</strong></td>
                      <td><strong>University</strong></td>
                    </tr>
                    <tr>
                      <td>UG. B.Sc.</td>
                      <td>Osmania University</td>
                    </tr>
                    <tr>
                      <td>PG. M.A.</td>
                      <td>Osmania University</td>
                    </tr>
                    <tr>
                      <td>PG. M.L.I.Sc. (GOLD MEDAL)</td>
                      <td>Andhra University</td>
                    </tr>
                    <tr>
                      <td>Ph.D.</td>
                      <td>Osmania University</td>
                    </tr>
                    <tr>
                      <td>NET</td>
                      <td>National Eligibility Test - UGC, New Delhi</td>
                    </tr>
                    <tr>
                      <td>PG.Diploma PGDLAN (Library Automation & Networking)</td>
                      <td>University of Hyderabad</td>
                    </tr>
                    <tr>
                      <td>PG.Diploma PGDCA (PG Diploma in Computer Applications)</td>
                      <td></td>
                    </tr>
                    
                    
                  </tbody>
                </Table>
              </td>
            </tr>
            {/* Add the remaining rows with the provided information */}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal} style={{backgroundColor:'#991E20'}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>





      <h3 style={{ color: headingColor }}>Non - Teaching - LIS Professional Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
      <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Mr. Ramchandra Reddy, M.</td>
            <td>Jr. Library Assistant</td>
            <td>B.A., M.L.I.Sc.</td>
          </tr>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>02</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Mr. Ramulu, B.</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Attender</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>6th Class</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>

      <h3 style={{ color: headingColor }}>Non - Teaching - Administrative Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        {/* Add the third table content as before */}
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Mr. Sarath Kumar, B.</td>
            <td>Asst. Programmer</td>
            <td>M.A., DCME.</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
      <h3 style={{ color: headingColor }}>Non - Teaching - Supporting Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Mr. Shankaraiah, N.</td>
            <td>Attender</td>
            <td>5th Class</td>
          </tr>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>02</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Mr. Ramulu, B.</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Attender</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>6th Class</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
      {/* Continue adding other tables and content as needed */}
    </div>
  );
};

export default ContentC;
