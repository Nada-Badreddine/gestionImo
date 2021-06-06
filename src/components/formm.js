import { Form, Input, InputNumber, Button } from 'antd';
import React from 'react';
import '../App.css';
import './pages/ContactUs';
import './formm.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Formm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (

    <>
      <head>
     <title>Create Next App</title>
    <link rel="icon" href="favicon.ico" />
      </head>
            
            <h1 className="titleF">Contact Us</h1>
            <p className="sub-title">Got a question? Send us a message and we'll respond as soon as possible </p>
            <div id="contact-cotainer">
            <div className="contact-info">
                <h4>
                        Contact Information
                    </h4>
                    


                    <div className="icon-text">
                    <i  class="fa fa-phone"  aria-hidden="true"></i>
                    <span>22 857 968</span>
                    </div>

                    <div className="icon-text">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>Epic@gmail.com</span>
                    </div>

                    <div className="icon-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>

                    <span>Rue Yasser Arafet Sahloul</span>
                    </div>


                    <div className="social-media">
                        <a href="#" className="icon-circle">
                        <i class="fab fa-facebook-square"></i>


                        </a>
                        <a href="#" className="icon-circle">
                        <i class="fab fa-twitter"></i>




                        </a>
                        <a href="#" className="icon-circle">
                        <i class="fab fa-instagram-square"></i>


                        </a>
                        <a href="#" className="icon-circle">
                        <i class="fab fa-youtube"></i>


                        </a>
                    </div>
                </div>
    
                <Form 
                {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <p>Fill up the form and then click send</p>
    
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'name']}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
                
            </div>
            </>
    
  );
};

export default Formm;