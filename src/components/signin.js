import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Signin = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 

  return (
   
    <Form
    
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className='x'
    >
      <h1>Sign in</h1>
      <p>use your UserName or your Gmail account</p>
      <Form.Item  
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
      <Link to='client'>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Link>
        <span>  No account? <a href='/sign-up'>create one ! </a> </span>
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
       
      </Form.Item>
      
    </Form>
  )
};



export default Signin;