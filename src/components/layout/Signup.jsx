import React from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const Signup = () => { 
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };    
    return (
 
    
    <>       
    <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 1200,
      maxHeight:500
    }}
  >
    <Form.Item
      label="Fullname"
      name="Fullname"
      rules={[
        {
          required: true,
          message: 'Please Fullname!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Age"
      name="Age"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="Blood Group"
      name="Blood Group"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Mentions />
    </Form.Item>

    <Form.Item
      label="Emails"
      name="Emails"
      rules={[
        {
          required: true,
          message: 'Please Enter Emails!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Address"
      name="Address"
      rules={[
        {
          required: true,
          message: 'Please Enter Address!',
        },
      ]}
    >
      <Input />
    </Form.Item>

          <Select
          placeholder ='Gender'
      style={{
        height:50,
        width: 120,
        margin:5,
        padding: 5,
      }}
      onChange={handleChange}
        allowClear
          
options={[
        {
          value: 'M',
          label: 'Male',
        },
        {
          value: 'F',
          label: 'Female',
        },
        {
          value: 'T',
          label: 'Not speficing',
        },
        
      ]}
    />
  
  <Form.Item
      label="Cell No"
      name="PhoneNo"
      rules={[
        {
          required: true,
          message: 'Please Enter Phone No!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please Enter Username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
        size="large"
      label="Passwords"
      name="Passwords"
      rules={[
        {
          required: true,
          message: 'Please Enter Passwords!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
  
    
    <Form.Item
      wrapperCol={{
        offset: 4,
        span: 6,
      }}
    >
      <Button type="primary" htmlType="submit" style={{backgroundColor:"red"}}>
        Register
      </Button>
    </Form.Item>
  </Form>
  </> );}
export default Signup;