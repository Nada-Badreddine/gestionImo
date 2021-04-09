import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

import { Table } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { getAllImo } from "../services/imoServices";

const Amortissement = () => {
  const [imo, setImo] = useState([]);
  const [visible, setVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const columns = [
    {
      title: "designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Amortissement",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (item) => {
        console.log("item", item);
        return (
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
              setCurrentItem(item);
            }}
          >
            plan d'amortissement
          </Button>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columnsAmmo = [
    {
      title: "Années",
      dataIndex: "années",
      key: "années",
    },
    {
      title: "Valeur de base",
      dataIndex: "valeur de base",
      key: "valeur de base",
    },
    {
      title: "Annuité d'amortisssement",
      dataIndex: "annuité d'amortisssement",
      key: "annuité d'amortisssement",
    },
    {
      title: "Amortissement cumulé",
      dataIndex: "amortissement cumulé",
      key: "amortissement cumulé",
    },
    {
      title: "Valeur nette comptable",
      dataIndex: "valeur nette comptable",
      key: "valeur nette comptable",
    },
  ];

  useEffect(() => {
    getAllImo() // fetch as usual here!
      .then((data) => {
        setImo(data.data.result);
      });
  }, []);

  console.log("imo", imo);
  return (
    <>
      <Table dataSource={imo} columns={columns} setVisible={setVisible} />

      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>{currentItem?.duree}</p>
        <Table dataSource={dataSource} columns={columnsAmmo} />;
      </Modal>
    </>
  );
};
export default Amortissement;
