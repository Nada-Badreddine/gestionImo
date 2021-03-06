import { Form, Input, InputNumber, Button } from "antd";
import React from "react";
import { createClient } from "../services/clientsServices";
import './pages/SignUp.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const SignUp = () => {
  const onFinish = async (values) => {
    console.log(values);

    const { email, username, website, phone } = values.user;
    await createClient({
      password: values.password,
      email,
      username,
      website,
      phone,
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h2 style={{fontSize: "18px", marginTop: "20px", textAlign: "center", fontWeight: "600",paddingBottom: "47px"}}>
        Get started with us today! <br/> Create your account by filling out the
        information below.
      </h2>
      <Form.Item 
      className="inputdiminuer"
        name={["user", "username"]}
        label="Username"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item className="inputdiminuer"
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
        
      >
        <Input />
      </Form.Item>

     
     
      <Form.Item
      className="inputdiminuer"
        name={"password"}
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
      className="inputdiminuer"
        name={"confirm"}
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
      className="inputdiminuer"
        name={["user", "phone"]}
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
                Already have an account? Login <a href="/signin">here</a>
      </Form.Item>
    </Form>
  );
};
export default SignUp;
