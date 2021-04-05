import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import React from "react";
import "./Signin.css";
import { login } from "../services/clientsServices";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Signin = () => {
  const [error, setError] = useState("");
  const onFinish = async (values) => {
    const { email, password } = values;
    setError("");
    const result = await login({ email, password });
    if (result.data.error) {
      setError(result.data.error);
    } else {
      localStorage.setItem("token", result.data.token);
      window.location.replace("/client");
      localStorage.setItem("name", result.data.client.username);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="x"
    >
      <h1>Sign in</h1>
      <p>use your UserName or your Gmail account</p>
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {error && <p>{error}</p>}
      </Form.Item>
      <Form.Item
        {...tailLayout}
        name="remember"
        valuePropName="checked"
      ></Form.Item>
    </Form>
  );
};

export default Signin;
