import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

import { Table } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { getAllImo } from "../services/imoServices";
import getAmortis from "../helpers/imoHelpers";

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
      
      render: (item) => {
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
      dataIndex: "montant",
      key: "montant",
    },
    {
      title: "Annuité d'amortisssement",
      dataIndex: "annAmm",
      key: "annAmm",
    },
    {
      title: "Amortissement cumulé",
      dataIndex: "ammorCumm",
      key: "ammorCumm",
    },
    {
      title: "Valeur nette comptable",
      dataIndex: "vnc",
      key: "vnc",
    },
  ];

  useEffect(() => {
    getAllImo() // fetch as usual here!
      .then((data) => {
        setImo(data.data.result);
      });
  }, []);

  const ammor = getAmortis(currentItem);

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
        <Table dataSource={ammor} columns={columnsAmmo} />;
      </Modal>
    </>
  );
};
export default Amortissement;
