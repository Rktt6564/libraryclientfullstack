import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Form, Input, message, Row, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/user/login', formData);

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('Student', JSON.stringify(response.data.user));
        message.success('Login success');
        setLoading(false);
        navigate('/StudentDashboard', { state: { user: response.data.user } });
      } else {
        setLoading(false);
        message.error('Token not received');
      }
    } catch (error) {
      setLoading(false);
      message.error('Login failed');
    }
  };

  return (
    <div className="auth-parent" style={{ paddingTop: '120px', textAlign: 'center' }}>
      <style>
        {`
          .custom-input {
            position: relative;
            border: 1px solid #a16b15;
            transition: border 0.3s ease;
            overflow: hidden;
          }

          .custom-input:hover {
            border: 1px solid maroon;
          }

          .custom-input::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid maroon;
            box-sizing: border-box;
            animation: rotateLine 1s infinite linear;
          }

          @keyframes rotateLine {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <Navbar />
      <Row justify="center" className='mt-3'>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src="https://img.freepik.com/free-photo/young-adult-man-wth-black-hair-posing-white-wall_231208-2284.jpg?size=626&ext=jpg&ga=GA1.1.330745569.1701891114&semt=ais"
            alt="Login"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card style={{ width: '100%', textAlign: 'left', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            {loading && <Spin />}
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Enter Name"
                // rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Item>
              <Form.Item
                name="roll"
                label="Enter Rollno"
                // rules={[{ required: true, message: 'Please enter your roll number' }]}
              >
                <Input
                  name="roll"
                  value={formData.roll}
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: '#a16b15', border: 'none', width: '100%' }}
              >
                LOGIN
              </Button>
            </Form>
          </Card>
        </Col>
        
      </Row>
    </div>
  );
};

export default StudentLogin;
