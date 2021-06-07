import {
    Form,
    Input,
    InputNumber,
    Button,
    DatePicker,
    Radio,
    Modal,
  } from "antd";
  import React from "react";
  
  import { createExp } from "../services/exploi";
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
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
  
  const SaisiE = () => {
    const onFinish = async (values) => {
        console.log(values);
  
      const {
        Designation,
        User,
        DateDepot,
        DateSortie, 
    } = values;
     
  console.log("qqq",DateDepot);
      await createExp({
        Designation,
        User,
        DateDepot:DateDepot._d,
        DateSortie:DateSortie._d,
        
      });
    };
  
    
  
    return (
      <>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"Designation"}
            label="Designation:"
            rules={[{ type: "string", min: 0, max: 100 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"User"}
            label="User:"
            rules={[{ type: "string", min: 0, max: 100 }]}
          >
            <Input />
          </Form.Item>
  
          
  
         
          <Form.Item
            label="Date de depot :"
            name={ "DateDepot"}
          >
            <DatePicker />
          </Form.Item>
  
          <Form.Item label="Date de sortie :" name={ "DateSortie"}>
            <DatePicker />
          </Form.Item>
  
          
  
          
  
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
  
          
        </Form>
      </>
    );
};
  
  export default SaisiE;
  