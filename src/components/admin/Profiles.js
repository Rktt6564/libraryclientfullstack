import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Table, Row, Col } from 'react-bootstrap';
import { FaUserEdit, FaCamera, FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({
    // username: 'Srikanth',
    adminName: 'Srikanth', // Added adminName to state
    designation: 'Librarian',
    emailId: 'cbitlic@gmail.com  / librarian@cbit.ac.in',
    phoneNumber: '84669 97215',
    photo: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const storedAdmin = JSON.parse(localStorage.getItem('Admin'));
      const username = storedAdmin.username;
      const adminName = storedAdmin.name;

      // Fetch admin profile data from the server
      const response = await axios.get(`http://localhost:5000/api/auth/admin/profile/${username}`);
      const { admin } = response.data;

      // Update state with admin profile data, including the admin name
      setAdminData({ ...admin, username, adminName });
    } catch (error) {
      console.error('Error fetching admin profile:', error);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (photoFile) {
        formData.append('photo', photoFile);
      }
      formData.append('designation', adminData.designation);
      formData.append('emailId', adminData.emailId);
      formData.append('phoneNumber', adminData.phoneNumber);

      const username = JSON.parse(localStorage.getItem('Admin')).username;
      await axios.post(`http://localhost:5000/api/auth/admin/profile/${username}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchAdminProfile();
      setEditMode(false);
    } catch (error) {
      console.error('Error updating admin profile:', error);
    }
  };

  return (
    <Card style={{ width: '60rem', padding: '10px', textAlign: 'center' }} className="d-flex justify-content-center align-items-center vh-10">
      <Row className="mb-3">
        <Col>
          <div
            className="d-flex flex-column align-items-center"
            onClick={handlePhotoChange}
            style={{ cursor: editMode ? 'not-allowed' : 'pointer' }}
          >
            {adminData.photo ? (
              <>
                <img
                  src={adminData.photo}
                  alt="Admin Profile"
                  style={{
                    maxWidth: '100px',
                    maxHeight: '100px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                />
                {editMode && (
                  <p
                    style={{
                      textDecoration: 'underline',
                      marginTop: '0.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    <FaCamera /> Change Photo
                  </p>
                )}
              </>
            ) : (
              <>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/180/180693.png"
                  alt="Default Profile"
                  style={{
                    maxWidth: '200px',
                    maxHeight: '200px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    marginTop: '120px',
                  }}
                />
                {editMode && (
                  <p>
                    <FaCamera /> Click to Upload Photo
                  </p>
                )}
              </>
            )}
            <input type="file" style={{ display: 'none' }} onChange={handlePhotoChange} />
          </div>
        </Col>
        <Col>
          <Card.Title>
            <h2>Admin Profile</h2>
          </Card.Title>
          {!editMode ? (
            <div>
              <Table striped bordered hover responsive>
                <tbody>
                  <tr>
                    <td>Admin Name</td>
                    <td>{adminData.adminName}</td>
                  </tr>
                  {/* <tr>
                    <td>Username</td>
                    <td>{adminData.username}</td>
                  </tr> */}
                  <tr>
                    <td>Designation</td>
                    <td>{adminData.designation}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{adminData.emailId}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>{adminData.phoneNumber}</td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="primary" onClick={toggleEditMode}>
                <FaUserEdit /> Edit
              </Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  value={adminData.designation}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmailId">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="emailId"
                  value={adminData.emailId}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={adminData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhoto">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />
                {adminData.photo && (
                  <img
                    src={adminData.photo}
                    alt="Admin Profile"
                    style={{
                      maxWidth: '100px',
                      maxHeight: '100px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                    onClick={handlePhotoChange}
                  />
                )}
              </Form.Group>
              <br />
              <Button variant="success" type="submit">
                <FaCheck /> Save
              </Button>
              <span> </span>
              <Button variant="danger" onClick={toggleEditMode}>
                <FaTimes /> Cancel
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default AdminProfile;
