import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Table, Row, Col } from 'react-bootstrap';
import { FaUserEdit, FaCamera, FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    roll: '',
    department: '',
    semester: '',
    admissionNumber: '',
    dob: '',
    phoneNumber: '',
    email: '',
    photo: null,
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = JSON.parse(localStorage.getItem('Student'));
      const { name, roll } = userData;

      setProfileData({ ...profileData, name, roll });

      const response = await axios.get(`http://localhost:5000/api/auth/get-profile/${roll}`);
      const { student } = response.data;

      if (student.photo) {
        const base64Image = Buffer.from(student.photo.data, 'base64').toString('base64');
        const photoSrc = `data:${student.photo.type};base64,${base64Image}`;
        setProfileData((prevData) => ({ ...prevData, ...student, photo: photoSrc }));
      } else {
        setProfileData((prevData) => ({ ...prevData, ...student }));
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleImageClick = () => {
    if (!editMode) {
      document.getElementById('upload-photo').click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('photo', profileData.photo);
      formData.append('department', profileData.department);
      formData.append('semester', profileData.semester);
      formData.append('admissionNumber', profileData.admissionNumber);
      formData.append('dob', profileData.dob);
      formData.append('phoneNumber', profileData.phoneNumber);
      formData.append('email', profileData.email);

      await axios.post(`http://localhost:5000/api/auth/save-profile/${profileData.roll}`, formData);
      alert('Profile updated successfully!');
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


  return (
    <Card style={{ width: '40rem', padding: '20px', textAlign: 'center' }}>
      <Row className="mb-3">
        <Col>
          <div
            className="d-flex flex-column align-items-center"
            onClick={handleImageClick}
            style={{ cursor: editMode ? 'not-allowed' : 'pointer' }}
          >
            {profileData.photo ? (
              <>
                <img
                  src={URL.createObjectURL(profileData.photo)}
                  alt="Profile"
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
                    onClick={() => document.getElementById('upload-photo').click()}
                  >
                    Change Photo
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
                {editMode && <p>Click to Upload Photo</p>}
              </>
            )}
            <strong>
              <p>{profileData.name}</p>
            </strong>
            <input
              type="file"
              id="upload-photo"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </Col>
        <Col>
          <Card.Title style={{ textAlign: 'center' }}>
            <h2>My Profile</h2>
          </Card.Title>
          {!editMode ? (
            <div>
              <Table striped bordered hover responsive>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{profileData.name}</td>
                  </tr>
                  <tr>
                    <td>Roll Number</td>
                    <td>{profileData.roll}</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>{profileData.department}</td>
                  </tr>
                  <tr>
                    <td>Semester</td>
                    <td>{profileData.semester}</td>
                  </tr>
                  <tr>
                    <td>Admission Number</td>
                    <td>{profileData.admissionNumber}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth</td>
                    <td>{profileData.dob}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>{profileData.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{profileData.email}</td>
                  </tr>
                </tbody>
              </Table>
              <Button onClick={toggleEditMode}>Edit</Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  value={profileData.department}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formSemester">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  type="text"
                  name="semester"
                  value={profileData.semester}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAdmissionNumber">
                <Form.Label>Admission Number</Form.Label>
                <Form.Control
                  type="text"
                  name="admissionNumber"
                  value={profileData.admissionNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="text"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhoto">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
                {profileData.photo && (
                  <img
                    src={URL.createObjectURL(profileData.photo)}
                    alt="Profile"
                    style={{
                      maxWidth: '100px',
                      maxHeight: '100px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                    onClick={() => document.getElementById('upload-photo').click()}
                  />
                )}
              </Form.Group>
              <br></br>
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

export default MyProfile;
