import React from 'react';
import { Button, Form, Input, InputNumber, Mentions, Select } from 'antd';

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

const Signup = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{ maxWidth: 1200, maxHeight: 500 }}
      >
        <Form.Item
          label="Fullname"
          name="Fullname"
          rules={[{ required: true, message: 'Please input your fullname!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="Age"
          rules={[{ required: true, message: 'Please input your age!' }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Blood Group"
          name="Blood Group"
          rules={[{ required: true, message: 'Please input your blood group!' }]}
        >
          <Mentions />
        </Form.Item>

        <Form.Item
          label="Emails"
          name="Emails"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="Address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="Gender"
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <Select
            placeholder="Select a gender"
            style={{ width: 120, margin: 5, padding: 5 }}
            onChange={handleChange}
          >
            <Select.Option value="M">Male</Select.Option>
            <Select.Option value="F">Female</Select.Option>
            <Select.Option value="T">Not specifying</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Cell No"
          name="PhoneNo"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Passwords"
          name="Passwords"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: 'red' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
