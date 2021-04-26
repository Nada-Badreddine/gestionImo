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
import { createImo } from "../services/imoServices";

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

const Saisi = () => {
  const [subCategoryValue, setSubCategoryValue] = React.useState("");
  const [categoryValue, setCategorieValue] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const onChange = (e) => {
    setCategorieValue(e.target.value);
    setVisible(true);
  };

  const onChangeSubCategory = (e) => {
    setSubCategoryValue(e.target.value);
  };
  const onFinish = async (values) => {
    console.log(values);
    const selectedSubCategory = subCategories.filter(
      (cat) => cat.name === subCategoryValue
    )[0];
    const {
      designation,
      duree,
      montant,
      name,
      dateAquisition,
      serviceDate,
    } = values.user;
    console.log("selectedSubCategory", selectedSubCategory);
    await createImo({
      designation,
      compte_comptable: selectedSubCategory.comptes,
      type: selectedSubCategory.type,
      category: selectedSubCategory.category,
      duree,
      montant,
      name,
      dateAquisition: dateAquisition._d,
      serviceDate: serviceDate._d,
    });
  };

  // tous le categories
  const subCategories = [
    {
      name: "les terrains (comptes 211)",
      comptes: 211,
      category: "corporelle",
      type: "les terrains",
    },
    {
      name: "les  constructions (comptes 213)",
      comptes: 213,
      category: "corporelle",
      type: "les  constructions",
    },
    {
      name: "les  constructions (comptes) incoprelle",
      comptes: 213,
      category: "incorporelle",
      type: "les  constructions",
    },
    {
      name: "les  constructions (comptes) financiére",
      comptes: 213,
      category: "financiére",
      type: "les constructions",
    },
  ];

  const filtredSubCategories = subCategories.filter(
    (cat) => cat.category === categoryValue
  );

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "designation"]}
          label="Designation:"
          rules={[{ type: "string", min: 0, max: 255 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "categorie"]} label="Categorie">
          <Radio.Group onChange={onChange} value={categoryValue}>
            <Radio value="corporelle">corporelle</Radio>
            <Radio value="incorporelle">incorporelle</Radio>
            <Radio value="financiére">financiére</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={["user", "compte_comptable"]}
          label="Compte Comptable:"
          value={subCategoryValue}
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["user", "duree"]}
          label="Durée:"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["user", "montant"]}
          label="Montant"
          rules={[{ type: "number", min: 0, max: 10000 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Date d'acquisition:"
          name={["user", "dateAquisition"]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date mis en service" name={["user", "serviceDate"]}>
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
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <p>{categoryValue}</p>
          <Radio.Group onChange={onChangeSubCategory} value={subCategoryValue}>
            {filtredSubCategories.map((cat) => {
              return <Radio value={cat.name}>{cat.name}</Radio>;
            })}
          </Radio.Group>
        </Modal>
      </Form>
    </>
  );
};

export default Saisi;
