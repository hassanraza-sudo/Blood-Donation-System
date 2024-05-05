import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Mentions, Select } from 'antd';
import Axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const EmployeeRegister = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");
  const [empName, setempName] = useState("");
  const [empMail, setempMail] = useState("");
  const [empPhone, setempPhone] = useState("");
  const [empAddress, setempAddress] = useState("");

  const handleSubmit = () => {
    // post-url
    const regurl = "http://localhost:3001/reg/emp";
    // post-req
    Axios.post(regurl, {
      empName: empName,
      empMail: empMail,
      empPhone: empPhone,
      empAddress: empAddress,
      empUserName: empUserName,
      empPassword: empPassword,
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Fullname"
          name="Fullname"
          rules={[{ required: true, message: 'Please input your fullname!' }]}
        >
          <Input onChange={(e) => setempName(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Emails"
          name="Emails"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(e) => setempMail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Cell No"
          name="PhoneNo"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input onChange={(e) => setempPhone(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Address"
          name="Address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input onChange={(e) => setempAddress(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input onChange={(e) => setempUsername(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Passwords"
          name="Passwords"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password onChange={(e) => setempPassword(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: 'red' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeRegister;
