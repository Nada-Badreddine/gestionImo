import { Form, Input, InputNumber, Button, DatePicker, Radio } from 'antd';
import React from 'react';
import { createImo } from '../services/imoServices';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

const Saisi = () => {
   
  const onFinish = async (values) => {
    console.log(values);
   await  createImo(values.user)
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      
      <Form.Item name={['user', 'designation']} label="Designation:" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'categorie']} label="Categorie:" rules={[{ type: 'string', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'compte comptable']} label="Compte Comptable:" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'duree']} label="Durée:" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'montant']} label="Montant" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Date d'acquisition:">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date mis en service">
          <DatePicker />
        </Form.Item>
       
        <Form.Item name="radio-group" label="Type d'amortissement">
        <Radio.Group>
          <Radio value="a">Lineaire</Radio>
          <Radio value="b">Dégressif</Radio>
          
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Saisi;