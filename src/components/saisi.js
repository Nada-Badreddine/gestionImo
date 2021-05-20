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

const Saisi = () => {
  const [subCategoryValue, setSubCategoryValue] = React.useState("");

  /* categoryValue fiha corporelle incorpor et financière */

  const [categoryValue, setCategorieValue] = React.useState("");

  const [visible, setVisible] = React.useState(false);

  const onChange = (e) => {
    setCategorieValue(e.target.value);
    setVisible(true);
    // 7elina popin
  };

  const onChangeSubCategory = (e) => {
    setSubCategoryValue(e.target.value);
  };

  const onFinish = async (values) => {
    console.log(values);

    const selectedSubCategory = subCategories.filter(
      (cat) => cat.name === subCategoryValue
    )[0];
    // [{
    //name: "Frais de recherche et de développement",
    //comptes: 203,
    //category: "incorporelle",
    //type: "Frais de recherche et de développement",
    // },]

    const {
      Designation,
      duree,
      Coefficient,
      Quantite,
      Montant,
      type,
      name,
      comptes,
      category,

      dateAquisition,
      serviceDate,
    } = values.user;
    console.log("selectedSubCategory", selectedSubCategory);
    console.log("values.user", values.user);

    await createImo({
      Designation,
      duree,
      Coefficient,
      Quantite,
      Montant,

      /*** */
      name,
      comptes: selectedSubCategory.comptes,
      category: selectedSubCategory.category,
      type: selectedSubCategory.type,
      /*** */
      dateAquisition: dateAquisition._d,
      serviceDate: serviceDate._d,
    });
  };

  const subCategories = [
    {
      name: "les terrains",
      comptes: 211,
      category: "corporelle",
      type: "les terrains",
    },
    {
      name: "Agencements,aménagements de terrains",
      comptes: 212,
      category: "corporelle",
      type: "Agencements,aménagements de terrains",
    },
    {
      name: "Constructions",
      comptes: 213,
      category: "corporelle",
      type: "Constructions",
    },
    {
      name: "Constructions sur sol d'autrui",
      comptes: 214,
      category: "corporelle",
      type: "Constructions sur sol d'autrui",
    },
    {
      name: "Installations techniques,matériels et outillages industriels",
      comptes: 215,
      category: "corporelle",
      type: "Installations techniques,matériels et outillages industriels",
    },
    {
      name: "Autres immobilisations corporelles",
      comptes: 218,
      category: "corporelle",
      type: "Autres immobilisations corporelles",
    },

    {
      name: "Frais d'établissement",
      comptes: 201,
      category: "incorporelle",
      type: "Frais d'établissement",
    },
    {
      name: "Frais d'établissement",
      comptes: 201,
      category: "incorporelle",
      type: "Frais d'établissement",
    },
    {
      name: "Frais de recherche et de développement",
      comptes: 203,
      category: "incorporelle",
      type: "Frais de recherche et de développement",
    },
    {
      name: "Concessions et droits similaires,brevets,licences,marques,procédés,logiciels..",
      comptes: 205,
      category: "incorporelle",
      type: "Concessions et droits similaires,brevets,licences,marques,procédés,logiciels..",
    },
    {
      name: "Droit au bail",
      comptes: 206,
      category: "incorporelle",
      type: "Droit au bail",
    },
    {
      name: "Fonds commercial",
      comptes: 207,
      category: "incorporelle",
      type: "Fonds commercial",
    },
    {
      name: "Titres de participation",
      comptes: 261,
      category: "financière",
      type: "Titres de participation",
    },
    {
      name: "Titres immobilisés(droits de propriété)",
      comptes: 271,
      category: "financière",
      type: "Titres immobilisés(droits de propriété)",
    },
    {
      name: "Titres immobilisés de portefeuille",
      comptes: 272,
      category: "financière",
      type: "Titres immobilisés de portefeuille",
    },
    {
      name: "Titres immobilisés (droits de créance)",
      comptes: 273,
      category: "financière",
      type: "Titres immobilisés (droits de créance)",
    },
  ];
  const filtredSubCategories = subCategories.filter(
    (kdskdjskdjskjdksjdskdjskjdskdjskdj) =>
      kdskdjskdjskjdksjdskdjskjdskdjskdj.category === categoryValue
  );
  // jibli subcategories eli categry mte3hom === selectedCategory

  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "Designation"]}
          label="Designation:"
          rules={[{ type: "string", min: 0, max: 100 }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "Categorie"]} label="Categorie">
          <Radio.Group onChange={onChange} value={categoryValue}>
            <Radio value="corporelle">Corporelle</Radio>
            <Radio value="incorporelle">Incorporelle</Radio>
            <Radio value="financiére">Financiére</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={["user", "Montant"]}
          label="Montant"
          rules={[{ type: "number", min: 0, max: 10000 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["user", "duree"]}
          label="Duree d'amortissement :"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Date d'acquisition :"
          name={["user", "dateAquisition"]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="Date mis en service :" name={["user", "serviceDate"]}>
          <DatePicker />
        </Form.Item>

        <Form.Item name="radio-group" label="Type d'amortissement">
          <Radio.Group>
            <Radio value="a">Lineaire</Radio>
            <Radio value="b">Dégressif</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={["user", "Coefficient"]}
          label="Coefficient :"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name={["user", "Quantite"]}
          label="Quantitè:"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Modal
          title=""
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
