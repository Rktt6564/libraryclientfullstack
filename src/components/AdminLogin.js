import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Form, Input, message, Row, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      const response = await axios.post('http://localhost:5000/api/auth/admin/login', formData);

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('Admin', JSON.stringify(response.data.user));
        message.success('Login success');
        setLoading(false);
        navigate('/AdminDashboard', { state: { user: response.data.user } });
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
        {/* Your custom styles */}
      </style>
      <Navbar />
      <Row justify="center" className="mt-3">
        <Col xs={24} sm={12} md={12} lg={8} xl={8} style={{ textAlign: 'center', marginBottom: '20px' }}>
          {/* Reuse the same image from StudentLogin */}
          <img
            src="https://img.freepik.com/free-photo/young-adult-man-wth-black-hair-posing-white-wall_231208-2284.jpg?size=626&ext=jpg&ga=GA1.1.330745569.1701891114&semt=ais"
            alt="Login"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card style={{ width: '100%', textAlign: 'left', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
            {loading && <Spin />}
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item name="username" label="Enter Username">
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Item>
              <Form.Item name="password" label="Enter Password">
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
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

export default AdminLogin;
