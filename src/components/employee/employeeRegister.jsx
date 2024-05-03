import React, { useState } from "react";
import Axios from "axios";
import {
  Button,
  Form,
  Input,
} from 'antd';



const EmployeeRegister = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");
  const [empName, setempName] = useState("");
  const [empMail, setempMail] = useState("");
  const [empPhone, setempPhone] = useState("");
  const [empAddress, setempAddress] = useState("");

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


  /*const submitEmployeeRegister = () => {
    //post-url
    const regurl = "http://localhost:3001/reg/emp";
    //post-req
    Axios.post(regurl, {
      empName: empName,
      empMail: empMail,
      empPhone: empPhone,
      empAddress: empAddress,
      empUserName: empUserName,
      empPassword: empPassword,
    }).then((response) => {
      alert(response.data.message);
    });
  };*/




  
  return (
    <>



        
        <Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 1200,
      maxHeight:500
    }}
    size="large"
  >
    



    <Form.Item
      label="Fullname"
      name="Fullname"
      placeholder="Full Name"
     
      rules={[
        {
          required: true,
          message: 'Please Fullname!',
        },
      ]}
      onChange={(e) => {
        setempName(e.target.value);
      }}

    >
      <Input />
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
      <Input placeholder="Email Address"
      onChange={(e) => {
        setempMail(e.target.value);
      }}/>
    </Form.Item>
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
      <Input         placeholder="Phone Number"
          onChange={(e) => {
            setempPhone(e.target.value);
          }}
  />
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
      <Input  placeholder="Address"
          onChange={(e) => {
            setempAddress(e.target.value);
          }}
          />
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
      <Input 
            placeholder="User Name"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
    />
    </Form.Item>
    
    <Form.Item
      
      label="Passwords"
      name="Passwords"
      rules={[
        {
          required: true,
          message: 'Please Enter Passwords!',
        },
      ]}
    >
      <Input.Password 
             placeholder="Password"
             onChange={(e) => {
               setempPassword(e.target.value);
             }}
      />
    </Form.Item>
    <Form.Item
      wrapperCol={{

          xs:{
            offset: 4,
            span:15,},
         sm:{
          
        offset: 4,
        span: 24,
         }   

      }
    
    }
    >
      <Button type="primary" htmlType="submits" style={{backgroundColor:"red"}}>
        Register
      {/*<button onClick={submitEmployeeRegister}>Register</button>*/}
     
      </Button>
    </Form.Item>
    </Form>
    </> );
};

export default EmployeeRegister;
